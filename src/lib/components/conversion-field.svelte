<script lang="ts">
  import type { Def } from '../types';
  import Input from './input.svelte';
  export let def: Def;
  let left: number | null = null;
  let right: number | null = null;

  const setBothFromLeft = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    if (!value) return (right = null);

    right = def.setFromLeft(value);
  };
  const setBothFromRight = (event: Event) => {
    const { value } = event.target as HTMLInputElement;

    if (!value) return (left = null);

    left = def.setFromRight(value);
  };
</script>

<div class="conversion-field">
  <Input name={def.left} on:input={setBothFromLeft} value={left} />
  <Input name={def.right} on:input={setBothFromRight} value={right} />
</div>

<style>
  .conversion-field {
    margin-inline: var(--size-2);
    border: var(--border-size-1) solid var(--surface-2);
    overflow: hidden;
    border-radius: var(--radius-2);
    display: flex;
  }

  @media (min-width: 50rem) {
    .conversion-field {
      margin-inline: 0;
    }
  }
</style>
