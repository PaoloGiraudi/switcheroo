<script lang="ts">
  export let name: string;
  export let value: number | null;
</script>

<div>
  <label for={name}>{name}</label>
  <input {name} {value} id={name} inputmode="numeric" min="0" type="number" on:input />
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
    height: var(--size-fluid-5);
    font-size: var(--font-size-fluid-3);
    padding-inline-start: var(--size-fluid-1);
    background-color: var(--surface-1);
    border-bottom: var(--border-size-2) solid transparent;
    border-radius: 0;
  }
  input:focus,
  input:focus-visible {
    border-bottom-color: var(--brand);
    outline-style: none;
  }
  label {
    color: var(--text-1);
    font-weight: var(--font-weight-4);
    font-size: var(--font-size-fluid-1);
    padding-inline-start: var(--size-fluid-1);
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
