<script lang="ts">
  import { ConversionField } from '$lib/components';
  import Plus from '$lib/icons/plus.svelte';
  import { db } from '$lib/db';
  import { liveQuery } from 'dexie';
  import type { Def } from '$lib/types';
  import { createConvertUnits } from '$lib/create-convert-units.svelte';

  const { convertUnits: c } = createConvertUnits();
  const userConversions = liveQuery(() => db.conversions.toArray());
  const conversions = new Map<string, Def>();

  $effect.pre(() => {
    $userConversions?.forEach((item) => {
      const { left, right, left_unit, right_unit } = item;
      const name = `${left}To${right}`;
      const def: Def = {
        left: left,
        right: right,
        setFromLeft: (value: string) => +c(+value).from(left_unit).to(right_unit).toFixed(2),
        setFromRight: (value: string) => +c(+value).from(right_unit).to(left_unit).toFixed(2)
      };
      conversions.set(name, def);
    });
  });
</script>

<div class="fields">
  {#if $userConversions}
    {#each conversions as [_, value]}
      <ConversionField def={value} />
    {/each}
  {/if}
</div>

<a href="/manage" class="add-button">
  <Plus />
</a>

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
    border-radius: var(--radius-2);
    &:hover {
      filter: brightness(0.9);
    }
  }
</style>
