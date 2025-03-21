import { drizzle } from 'drizzle-orm/neon-http';
console.log("DATABASE_URL:", process.env.DATABASE_URL);
// const db = drizzle(process.env.DATABASE_URL!);

export const db = drizzle(process.env.DATABASE_URL!);


