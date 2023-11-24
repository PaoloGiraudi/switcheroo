<script lang="ts">
  import { options } from '$lib/stores/options';
  import { fieldProxy, superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import { allMeasures } from 'convert-units';
  import { Card, Select } from '$lib/components';
  import Spinner from '$lib/icons/spinner.svelte';

  const measures = Object.keys(allMeasures);

  export let data: PageData;

  const { form, enhance, submitting } = superForm(data.form, {
    dataType: 'json',
    taintedMessage: null
  });

  const category = fieldProxy(form, 'category');
  const left = fieldProxy(form, 'left');
  const right = fieldProxy(form, 'right');

  $: units = $form?.category ? $options.get($form?.category) : [];
</script>

<Card title="Add a new conversion">
  <form use:enhance method="POST">
    <div class="add-fields">
      <Select
        bind:value={$category}
        options={measures}
        label="Category"
        name="category"
        placeholder="Speed, temperature..."
      />
      <Select bind:value={$left} options={units} disabled={!$category} label="From" name="left" />
      <Select bind:value={$right} options={units} disabled={!$category} label="To" name="right" />
    </div>
    <button
      type="submit"
      disabled={!$form.category || !$left?.name || !$right?.name || Boolean(submitting)}
    >
      <span>Submit</span>
      {#if submitting}
        <Spinner />
      {/if}
    </button>
  </form>
</Card>

<style>
  form {
    gap: var(--size-3);
    display: flex;
    flex-direction: column;
  }
  form :global(select) {
    background-color: var(--surface-2);
  }
  .add-fields {
    display: flex;
    gap: var(--size-4);
    flex-direction: column;
    align-self: center;
    width: 100%;
  }

  button {
    --btn-color: #000;
    margin-block-start: var(--size-2);
    background-color: var(--brand);
    padding-block: var(--size-2);
    border-radius: var(--radius-2);
    color: var(--btn-color);
    display: flex;
    justify-content: center;
    place-items: center;
    gap: var(--size-2);

    &:hover {
      filter: brightness(0.9);
    }
    & > span {
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-5);
      filter: invert(1);
    }
  }

  button:disabled {
    cursor: not-allowed;
    filter: none;
    opacity: 0.5;
  }

  @media (min-width: 640px) {
    .add-fields {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .add-fields :global(.field:first-child) {
      grid-column: 1 / 3;
    }
  }
</style>
