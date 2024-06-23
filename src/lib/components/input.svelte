<script lang="ts">
  import { capitalize } from '$lib/formatters';

  export let name: string;
  export let value: number | null;
</script>

<div>
  <label for={name}>{capitalize(name)}</label>
  <input {name} {value} id={name} inputmode="decimal" min="0" type="number" on:input />
</div>

<style>
  div {
    padding-block-start: var(--size-2);
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: var(--surface-1);
  }

  input {
    caret-color: var(--text-2);
    font-size: var(--font-size-5);
    padding-inline-start: var(--size-2);
    background-color: var(--surface-1);
    border-bottom: var(--border-size-2) solid transparent;
    border-radius: 0;

    @media (min-width: 50rem) {
      font-size: var(--font-size-8);
    }
  }
  input:focus,
  input:focus-visible {
    border-bottom-color: var(--brand);
    outline-style: none;
  }

  label {
    color: var(--text-1);
    font-weight: 400;
    font-size: var(--font-size-1);
    padding-inline-start: var(--size-2);

    @media (min-width: 50rem) {
      font-size: var(--font-size-4);
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
