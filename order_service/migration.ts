import { Pool } from "pg";
import { DB_URL } from "./config";
import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"

async function runMigration() {
    try {
        console.log("Migration start...");
        const pool = new Pool({ connectionString: DB_URL });
        const db = drizzle(pool);
        await migrate(db, { migrationsFolder: "./src/db/migrations" });
        console.log("migration was successful!");
        pool.end();
    } catch (error) {
        console.error("migration error", error);
    }
}

runMigration();