import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();

  return {
    userId: session?.user.userId,
    username: session?.user.username
  };
};

export const ssr = false;
