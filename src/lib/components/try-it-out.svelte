<script lang="ts">
  import ConversionField from './conversion-field.svelte';
  import type { Def } from '$lib/types';
  import CurvedArrow from '$lib/icons/curved-arrow.svelte';

  const def: Def = {
    left: 'Meters',
    right: 'Feets',
    setFromLeft: (value: string) => +(+value * 3.281).toFixed(2),
    setFromRight: (value: string) => +(+value / 3.281).toFixed(2)
  };
</script>

<div class="try-out">
  <ConversionField {def} />
  <div>
    <span>Try it out!</span>
    <CurvedArrow />
  </div>
</div>

<style>
  .try-out {
    margin-top: var(--size-8);
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--size-4);
  }

  span {
    font-size: var(--font-size-5);
    font-weight: 500;
  }

  @media (min-width: 50rem) {
    .try-out {
      margin-top: 0;
      gap: var(--size-8);
      width: 40%;
    }
    .try-out :global(.conversion-field) {
      transform: scale(0.7);
    }
    span {
      font-size: var(--font-size-6);
    }
  }
</style>
