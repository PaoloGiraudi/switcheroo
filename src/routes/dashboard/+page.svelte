<script lang="ts">
  import { ConversionField } from '$lib/components';
  import Plus from '$lib/icons/plus.svelte';
  export let data;
</script>

<div class="fields">
  {#each data.conversions as [_, value]}
    <ConversionField def={value} />
  {/each}
</div>

{#if data.userId}
  <a href="/dashboard/manage" class="add-button">
    <Plus />
  </a>
{/if}

<style>
  .fields {
    display: flex;
    flex-direction: column;
    max-inline-size: var(--size-md);
    gap: var(--size-2);
  }

  @media (min-width: 50rem) {
    .fields {
      max-inline-size: var(--size-xl);
      gap: var(--size-4);
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .add-button {
    position: absolute;
    bottom: var(--size-6);
    right: var(--size-6);
    color: var(--gray-0);
    display: grid;
    place-items: center;
    height: var(--size-fluid-5);
    aspect-ratio: 1;
    background-color: var(--brand);
    box-shadow: var(--shadow-2);
    border-radius: var(--radius-2);
    &:hover {
      filter: brightness(0.9);
    }
  }
</style>
