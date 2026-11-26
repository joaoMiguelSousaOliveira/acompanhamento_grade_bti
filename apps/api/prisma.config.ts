import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { config } from 'dotenv';
import path from 'node:path';

config({ path: path.resolve(__dirname, '../../.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env['DATABASE_URL'],
  },
});
