
import { timestamp, uniqueIndex, pgTable, text,uuid } from "drizzle-orm/pg-core";

//creating tabless
export const users=pgTable("users",{
      id:uuid("id").primaryKey().defaultRandom(),
      clerkId: text("clerk_id").unique().notNull(),
      name: text("name").notNull(),
//todo: banner fileds
imageUrl: text("image_url").notNull(),
createdAt: timestamp("created_at").defaultNow().notNull(),
updatedAt: timestamp("updated_at").defaultNow().notNull(),


},(t)=>[uniqueIndex("clerk_id_idx").on(t.clerkId)]);