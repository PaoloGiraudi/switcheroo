<script lang="ts">
  import { options } from '$lib/stores/options';
  import { fieldProxy, superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import { allMeasures } from 'convert-units';
  import { Card, Form, Select } from '$lib/components';

  const measures = Object.keys(allMeasures);

  export let data: PageData;

  const { form, enhance, message, errors } = superForm(data.form, {
    dataType: 'json',
    taintedMessage: null
  });

  const category = fieldProxy(form, 'category');
  const left = fieldProxy(form, 'left');
  const right = fieldProxy(form, 'right');

  $: units = $form?.category ? $options.get($form?.category) : [];
</script>

<Card title="Add a new conversion">
  <Form disabled={!$form.category || !$left?.name || !$right?.name} button="Submit">
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
  </Form>
</Card>

<style>
  .add-fields {
    display: flex;
    gap: var(--size-4);
    flex-direction: column;
    align-self: center;
    width: 100%;
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
