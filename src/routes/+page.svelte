<script lang="ts">
  import ConversionField from '$lib/components/conversion-field.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<div>
  {#each data.conversions as [_, value]}
    <ConversionField def={value} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    max-inline-size: var(--size-md);
    gap: var(--size-2);
  }

  @media (min-width: 640px) {
    div {
      max-inline-size: var(--size-xl);
      gap: var(--size-4);
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
