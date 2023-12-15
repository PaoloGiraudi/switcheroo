import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';
import { db } from '$lib/server/database';

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) redirect(302, '/signup');

  const prepared = db.query.user
    .findFirst({
      where: (user, { eq }) => eq(user.id, session.user.userId),
      columns: {},
      with: {
        userToConversions: {
          columns: {},
          with: {
            conversions: true
          }
        }
      }
    })
    .prepare();

  return {
    ...(await prepared.execute())
  };
};
