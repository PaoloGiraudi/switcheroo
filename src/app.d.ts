// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />
declare global {
  namespace App {
    interface PageState {
      page: string | null;
    }
    interface Locals {
      auth: import('lucia').AuthRequest;
    }
    // interface Error {}
    // interface PageData {}
    // interface Platform {}
  }
  namespace Lucia {
    type Auth = import('$lib/server/lucia').Auth;
    type DatabaseUserAttributes = {
      username: string;
    };
    type DatabaseSessionAttributes = Record<string, never>;
  }
}

export {};
