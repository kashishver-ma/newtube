import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/db/index';
import {users} from '@/db/schema';
// import { users } from '@/db/schema';
import { eq } from "drizzle-orm";
import { error } from 'console';


export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error("Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env")
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
try
  { if (!svix_id || !svix_timestamp || !svix_signature) {
  return new Response('Error: Missing Svix headers', {
    status: 400,
  })}
}
catch (err){
  throw new Error('Error: Missing Svix headers')
}

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data
  const eventType = evt.type
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  // console.log('Webhook payload:', body)

  const event = evt.type
  try{
  if(eventType === 'user.created') {
      const {data} = evt

      
      await db.insert(users).values({
        clerkId: evt.data.id,
        name: `${evt.data.first_name} ${evt.data.last_name}`,
        imageUrl: data.image_url,
  }).returning(); // Ensures data is sa
}
}catch (err) {
  // console.error('Error: Could not insert user:', err)
  throw new Error('Error: Could not insert user')
}

    try { if(eventType === 'user.deleted') {
           const {data} = evt

           if(!data.id) {
            return new Response('Error: Missing user ID', {status: 400});
           }
           await db.delete(users).where(eq(users.clerkId, data.id) )
      }

      if(eventType === 'user.updated') {
           const {data} = evt      
           
           await db.update(users).set({
            name: `${evt.data.first_name} ${evt.data.last_name}`,
            imageUrl: data.image_url,}).where(eq(users.clerkId, data.id) )

      }}catch{
        throw new Error('Error: Could not update user')
      }

  return new Response('Webhook received', { status: 200 })
}