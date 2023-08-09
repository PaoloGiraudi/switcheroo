<script lang="ts">
  import { drawer } from '$lib/drawer';
  import { fade, fly } from 'svelte/transition';
  import Close from './icons/close.svelte';
  import Settings from './icons/settings.svelte';
</script>

<svelte:window on:keydown={(e) => e.code === 'Escape' && $drawer && drawer.set(false)} />

<button on:click={() => drawer.set(!$drawer)}>
  {#if $drawer}
    <Close />
  {:else}
    <Settings />
  {/if}
</button>
{#if $drawer}
  <div
    data-role="backdrop"
    on:keypress
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 250 }}
    on:click={() => drawer.set(false)}
  >
    <div
      data-role="dialog"
      in:fly={{ y: 500, duration: 150 }}
      out:fly={{ y: 500, duration: 250 }}
      on:click|stopPropagation
      on:keypress|stopPropagation
    >
      <slot />
    </div>
  </div>
{/if}

<style>
  button {
    border-radius: var(--radius-2);
    color: var(--text-1);
    display: grid;
    place-items: center;
    height: var(--size-fluid-5);
    aspect-ratio: var(--ratio-square);
    position: absolute;
    background: var(--surface-1);
    box-shadow: var(--shadow-2);
    border: var(--border-size-1) solid var(--surface-2);
    bottom: var(--size-3);
    right: var(--size-3);
  }
  div[data-role='backdrop'] {
    position: fixed;
    display: flex;
    align-items: flex-end;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    background-color: hsl(var(--gray-11-hsl) / 10%);
    backdrop-filter: blur(var(--size-1));
  }
  div[data-role='dialog'] {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--size-4);
    height: var(--size-xs);
    width: 100%;
    background-color: var(--surface-1);
    max-inline-size: var(--size-md);
    margin-inline: auto;
    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
  }

  @media (min-width: 640px) {
    button {
      display: none;
    }
  }
</style>
