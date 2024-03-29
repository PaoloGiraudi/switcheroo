import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) redirect(302, '/dashboard');
  return {};
};
