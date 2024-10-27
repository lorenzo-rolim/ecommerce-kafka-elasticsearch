import { DB_URL } from './src/config/index';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    dialect: "postgresql",
    driver: "pglite",
    dbCredentials: {
        url: DB_URL as string
    },
    verbose: true,
    strict: true
})