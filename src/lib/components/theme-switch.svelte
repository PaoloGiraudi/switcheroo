<script lang="ts">
  import { onMount } from 'svelte';
  import Sun from '$lib/icons/sun.svelte';
  import Moon from '$lib/icons/moon.svelte';
  import { browser } from '$app/environment';
  type Theme = 'light' | 'dark';

  onMount(() => document.documentElement.setAttribute('color-scheme', theme));

  const prefersDarkMode = browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userTheme = browser && localStorage.getItem('color-scheme');

  let theme:Theme = $state(userTheme ? userTheme : prefersDarkMode ? 'dark' : 'light');

  function setTheme(value: Theme) {
    theme = value;
    document.documentElement.setAttribute('color-scheme', value);
    localStorage.setItem('color-scheme', value);
  }
</script >

<button aria-label="Switch theme" onclick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
  {#if theme === 'dark'}
    <Sun />
  {/if}
  {#if theme === 'light'}
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
