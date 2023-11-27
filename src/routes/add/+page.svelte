<script lang="ts">
  import { options } from '$lib/stores/options';
  import { allMeasures } from 'convert-units';
  import { Card, Select } from '$lib/components';
  import Form from '$lib/components/form/form.svelte';
  import { page } from '$app/stores';
  import Message from '$lib/components/form/message.svelte';

  const measures = Object.keys(allMeasures);

  let category: string | null = null;
  let left: string | null = null;
  let right: string | null = null;

  $: units = category ? $options.get(category) : [];
  $: message = $page?.form?.message;
</script>

<Card title="Add a new conversion">
  <Form disabled={!category || !left || !right}>
    <div class="add-fields">
      <Select
        on:change={() => (left = right = null)}
        bind:value={category}
        options={measures}
        label="Category"
        name="category"
        placeholder="Speed, temperature..."
      />
      <Select
        bind:value={left}
        options={units}
        disabled={!category}
        label="From"
        name="left"
        object
      />
      <Select
        bind:value={right}
        options={units}
        disabled={!category}
        label="To"
        name="right"
        object
      />
    </div>
  </Form>
  {#if message}
    <Message {message} />
  {/if}
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
