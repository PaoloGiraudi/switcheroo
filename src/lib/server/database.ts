import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
import { TURSO_URL, TURSO_AUTH } from '$env/static/private';
import * as schema from './schema';

export const client = createClient({
  url: TURSO_URL,
  authToken: TURSO_AUTH
});

export const db = drizzle(client, { schema });
