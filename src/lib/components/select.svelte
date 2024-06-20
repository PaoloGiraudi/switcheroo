<script lang="ts">
  import { capitalize, unwrap } from '$lib/formatters';
  import Field from './field.svelte';
  export let placeholder: string | undefined = '---';
  export let label: string;
  export let name: 'left' | 'right' | 'category';
  export let disabled: boolean | undefined = false;
  export let value: unknown | null = null;
  export let options: string[] = [];
  export let object: boolean = false;
</script>

<Field {name} {label}>
  <select id={name} {name} bind:value {disabled} class:empty={!value} on:change>
    <optgroup label={`Select ${name}`}>
      <option value={null} disabled selected hidden>{placeholder}</option>
      {#each options as value}
        <option {value}>
          {object ? capitalize(unwrap(value).name) : capitalize(value)}
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
    background-color: var(--surface-2);
  }
</style>
