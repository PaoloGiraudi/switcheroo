<script lang="ts">
  import Field from '../components/field.svelte';
  import { definitions } from '../lib/definitions';
  import { conversions } from '../lib/conversions';
</script>

<div>
  {#each conversions as conversion}
    <Field def={definitions[conversion]} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
  }
  @media (min-width: 640px) {
    div {
      gap: var(--size-4);
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
