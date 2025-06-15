/*
<ai_context>
Initializes the database connection and schema for the app.
</ai_context>
*/

import { profilesTable, todosTable } from "@/db/schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env.local" });

const schema = {
  profiles: profilesTable,
  todos: todosTable,
};

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is required");
}

const client = postgres(databaseUrl);

export const db = drizzle(client, { schema });
