import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, '/');

  const result = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.id, session.user.userId),
    columns: {
      username: true
    },
    with: {
      userToConversions: {
        columns: {
          conversionsId: true
        },
        with: {
          conversions: true
        }
      }
    }
  });

  return {
    result
  };
};

export const actions: Actions = {
  logout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) return fail(401);
    await auth.invalidateSession(session.sessionId); // invalidate session
    locals.auth.setSession(null); // remove cookie
    throw redirect(302, '/login'); // redirect to login page
  }
};

export const ssr = false;
