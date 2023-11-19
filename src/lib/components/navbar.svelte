<script lang="ts">
  import { enhance } from '$app/forms';
  import ThemeSwitch from './theme-switch.svelte';
  export let user: string | undefined;
</script>

<nav>
  <a href="/">Switcheroo</a>
  <div class="right">
    {#if user}
      <p class="welcome">Hey, {user}!</p>
      <form action="/dashboard?/logout" method="post" use:enhance>
        <button class="button-link">Logout</button>
      </form>
    {:else}
      <div class="button-link" data-type="ghost">
        <a href="/signup">Sign up</a>
      </div>
      <div class="button-link">
        <a href="/login">Login</a>
      </div>
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
    background-color: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--border-size-1) solid var(--surface-2);
  }

  .right {
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
    padding-inline: var(--size-4);
    padding-block: var(--size-1);
    font-weight: 500;
    border-radius: var(--radius-2);
    border: var(--border-size-1) solid var(--brand);
    background-color: var(--background);

    &:hover {
      background-color: var(--surface-2);
    }

    & > a {
      color: var(--text-1);
    }
  }

  .button-link[data-type='ghost'] {
    background-color: transparent;
    border: var(--border-size-1) solid transparent;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 640px) {
    .welcome {
      display: block;
    }
  }
</style>
