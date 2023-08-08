<script>
  import { onMount } from 'svelte';
  import Sun from './icons/sun.svelte';
  import Moon from './icons/moon.svelte';
  import { setTheme, theme } from '$lib/theme';
  onMount(() => document.documentElement.setAttribute('color-scheme', $theme));
</script>

<p>Select theme</p>
<button aria-label="Switch theme" on:click={() => setTheme($theme === 'light' ? 'dark' : 'light')}>
  {#if $theme === 'dark'}
    <Sun />
  {/if}
  {#if $theme === 'light'}
    <Moon />
  {/if}
</button>

<style>
  p {
    padding-block-start: var(--size-2);
  }
  button {
    position: absolute;
    top: var(--size-4);
    right: var(--size-4);
    background-color: transparent;
    display: grid;
    place-items: center;
    height: var(--size-8);
    aspect-ratio: var(--ratio-square);
    border-radius: var(--radius-2);
  }

  @media (min-width: 640px) {
    p {
      display: none;
    }
  }
</style>
