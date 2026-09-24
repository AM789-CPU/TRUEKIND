import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
  __arenaNextJsDb?: NodePgDatabase<typeof schema>;
};

export function getDatabaseUrl(): string | undefined {
  return process.env.DATABASE_URL;
}

function createPool(): Pool {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL is required. Attach a Postgres database in Vercel and set DATABASE_URL to provision the app."
    );
  }
  return new Pool({ connectionString: databaseUrl });
}

export function getDb(): NodePgDatabase<typeof schema> {
  if (globalForDb.__arenaNextJsDb) return globalForDb.__arenaNextJsDb;
  const pool = globalForDb.__arenaNextJsPostgresqlPool ?? createPool();
  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
  }
  const db = drizzle(pool, { schema });
  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsDb = db;
  }
  return db;
}
