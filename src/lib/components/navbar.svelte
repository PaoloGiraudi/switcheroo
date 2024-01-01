<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Back from '$lib/icons/back.svelte';
  import ThemeSwitch from './theme-switch.svelte';
  export let user: string | undefined;
  export let handleClick: (e: MouseEvent & { currentTarget: HTMLAnchorElement }) => Promise<void>;
</script>

<nav>
  <a href="/">
    {#if $page.route.id !== '/' && $page.route.id !== '/dashboard'}
      <Back />
    {:else}
      Switcheroo
    {/if}
  </a>
  <div class="right">
    {#if user}
      <p class="welcome">Hey, {user}!</p>
      <form action="/dashboard?/logout" method="post" use:enhance>
        <button class="button-link">Logout</button>
      </form>
    {:else}
      <button class="button-link" data-type="ghost">
        <a href="/signup" on:click={handleClick}>Sign up</a>
      </button>
      <button class="button-link">
        <a href="/login" on:click={handleClick}>Login</a>
      </button>
    {/if}
    <ThemeSwitch />
  </div>
</nav>

<style>
  a:hover {
    text-decoration: none;
  }
  nav {
    z-index: var(--layer-important);
    padding: var(--size-2);
    padding-inline-start: var(--size-6);
    position: sticky;
    top: 0;
    background-color: var(--surface-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--border-size-1) solid var(--surface-2);
  }

  .right {
    align-items: center;
    display: flex;
    gap: var(--size-2);
  }

  .right :global(button) {
    margin-inline-start: var(--size-2);
  }

  .welcome {
    display: none;
    align-self: center;
    margin-inline-end: var(--size-2);
  }

  .button-link {
    display: grid;
    place-items: center;
    font-weight: 500;
    padding-block: var(--size-1);
    border-radius: var(--radius-2);
    border: var(--border-size-1) solid var(--brand);
    background-color: var(--surface-1);
    color: var(--text-1);
    width: var(--size-10);

    &:has(a) {
      & > a {
        width: 100%;
        padding-block: var(--size-1);
      }
    }

    &:hover {
      background-color: var(--surface-2);
    }
  }

  .button-link[data-type='ghost'] {
    background-color: transparent;
    border: var(--border-size-1) solid transparent;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 50rem) {
    .welcome {
      display: block;
    }
  }
</style>
