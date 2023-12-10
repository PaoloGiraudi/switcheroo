<script>
  import { onMount } from 'svelte';
  import Sun from '$lib/icons/sun.svelte';
  import Moon from '$lib/icons/moon.svelte';
  import { setTheme, theme } from '$lib/stores/theme';
  onMount(() => document.documentElement.setAttribute('color-scheme', $theme));
</script>

<button aria-label="Switch theme" on:click={() => setTheme($theme === 'light' ? 'dark' : 'light')}>
  {#if $theme === 'dark'}
    <Sun />
  {/if}
  {#if $theme === 'light'}
    <Moon />
  {/if}
</button>

<style>
  button {
    background-color: transparent;
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    border-radius: var(--radius-2);
  }
</style>
