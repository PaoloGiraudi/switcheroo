<script lang="ts">
  import { page } from '$app/stores';
  import Back from '$lib/icons/back.svelte';
  import ThemeSwitch from './theme-switch.svelte';
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
    gap: var(--size-3);
  }
</style>
