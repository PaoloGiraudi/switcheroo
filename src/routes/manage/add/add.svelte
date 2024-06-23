<script lang="ts">
  import { Message, Select } from '$lib/components';
  import { toCamelCase, unwrap } from '$lib/formatters';
  import { addSchema } from './schema';
  import { db } from '$lib/db';
  import { goto } from '$app/navigation';
  import { createConvertUnits } from '$lib/create-convert-units.svelte';

  let category: string | null = $state(null);
  let left: string | null = $state(null);
  let right: string | null = $state(null);

  const { measures, options } = createConvertUnits();

  const units = $derived(category ? options.get(category) : []);

  let message = $state('');

  async function onAdd(e: SubmitEvent) {
    const formData = new FormData(e.target);

    const form = addSchema.safeParse({
      category: formData.get('category'),
      right: {
        name: unwrap(formData.get('right')).name,
        unit: unwrap(formData.get('right')).unit
      },
      left: {
        name: unwrap(formData.get('left')).name,
        unit: unwrap(formData.get('left')).unit
      }
    });

    if (!form.success) {
      message = form.error.issues[0].message;
      return;
    }

    const { data } = form;

    const key = `${toCamelCase(data.left?.name)}_to_${toCamelCase(data.right?.name)}`;

    const newConv = {
      key: key,
      left_unit: data.left.unit,
      right_unit: data.right.unit,
      left: data.left.name,
      right: data.right.name
    };

    try {
      const query = await db.conversions.where('key').equals(newConv.key).toArray();
      if (!query.length) {
        await db.conversions.add(newConv);
      }
      goto('/');
    } catch (error) {
      message: 'An unknown error occurred';
    }
  }
</script>

<div class="add">
  <h1>Add a new conversion</h1>
  <form on:submit|preventDefault={onAdd}>
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
    <button type="submit" disabled={!category || !left || !right}>Add conversion</button>
  </form>
  {#if message}
    <Message {message} />
  {/if}
</div>

<style>
  .add {
    background-color: var(--surface-1);
    display: flex;
    flex-direction: column;
    padding: var(--size-4);
    gap: var(--size-4);
  }

  h1 {
    font-weight: 500;
    font-size: var(--font-size-4);
  }

  .add-fields {
    display: flex;
    gap: var(--size-4);
    flex-direction: column;
    align-self: center;
    width: 100%;
  }

  form {
    gap: var(--size-3);
    display: flex;
    flex-direction: column;
  }

  form :global(input) {
    background-color: var(--surface-2);
  }

  button {
    margin-block-start: var(--size-2);
    background-color: var(--brand);
    padding-block: var(--size-2);
    border-radius: var(--radius-2);
    color: #fff;
    display: flex;
    justify-content: center;
    place-items: center;
    gap: var(--size-2);
    font-size: var(--font-size-2);
    font-weight: 500;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button:disabled {
    cursor: not-allowed;
    filter: none;
    opacity: 0.5;
  }

  @media (min-width: 50rem) {
    .add {
      border-radius: var(--radius-2);
      border: var(--border-size-1) solid var(--surface-2);
      padding: var(--size-6);
      min-width: var(--size-content-4);
    }

    .add-fields {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .add-fields :global(.field:first-child) {
      grid-column: 1 / 3;
    }
  }
</style>
