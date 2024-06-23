<script lang="ts">
  import { page } from '$app/stores';
  import Back from '$lib/icons/back.svelte';
  import ThemeSwitch from './theme-switch.svelte';
</script>

<nav>
  {#if $page.route.id !== '/'}
    <a href="/">
      <Back />
    </a>
  {:else}
    <a href="info">Switcheroo</a>
  {/if}
  <ThemeSwitch />
</nav>

<style>
  nav {
    padding: var(--size-2);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--border-size-1) solid var(--surface-2);

    @media (min-width: 50rem) {
      padding-inline: var(--size-3);
    }
  }

  a {
    color: var(--text-1);
    padding-inline-start: var(--size-1);
    &:hover {
      text-decoration-color: var(--text-1);
    }
  }
</style>
