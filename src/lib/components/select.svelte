<script lang="ts">
  import { capitalize } from '$lib/helpers/formatters';
  import Field from './form/field.svelte';
  export let placeholder: string | undefined = '---';
  export let label: string;
  export let name: 'left' | 'right' | 'category';
  export let disabled: boolean | undefined = false;
  export let value: unknown;
  export let options: Record<'unit' | 'name', string>[] | string[] = [];
</script>

<Field {name} {label}>
  <select id={name} {name} bind:value {disabled} class:empty={!value}>
    <optgroup label={`Select ${name}`}>
      <option value={undefined} disabled selected hidden>{placeholder}</option>
      {#each options as value}
        <option {value}>
          {typeof value === 'string' ? capitalize(value) : capitalize(value.name)}
        </option>
      {/each}
    </optgroup>
  </select>
</Field>

<style>
  .empty {
    color: var(--text-2);
  }
  select {
    padding-block: var(--size-2);
    font-size: var(--font-size-2);
  }
</style>
