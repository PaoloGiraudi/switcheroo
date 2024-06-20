<script lang="ts">
  import { db } from '$lib/db';
  import { capitalize } from '$lib/formatters';
  import Trash from '$lib/icons/trash.svelte';
  import { liveQuery } from 'dexie';
  import { deleteSchema } from './schema';

  const userConversions = liveQuery(() => db.conversions.toArray());
  let message = $state('');

  async function onDelete(e: SubmitEvent) {
    const formData = new FormData(e.target);

    const form = deleteSchema.safeParse({
      id: Number(formData.get('id'))
    });

    if (!form.success) {
      message = form.error.issues[0].message;
      return;
    }

    try {
      await db.conversions.delete(form.data.id);
    } catch (error) {
      message: 'An unknown error occurred';
    }
  }
</script>

<div>
  <h2>Your dashboard</h2>
  {#if $userConversions}
    {#each $userConversions as conversions}
      <form on:submit|preventDefault={onDelete}>
        <input type="hidden" name="id" id="id" value={conversions.id} />
        <span>{`${capitalize(conversions.left)} → ${capitalize(conversions.right)}`}</span>
        <button type="submit">
          <Trash />
        </button>
      </form>
    {/each}
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-4);
    padding: var(--size-4);
  }
  form {
    display: flex;
    justify-content: space-between;
    border-radius: var(--radius-2);
    border: var(--border-size-1) solid var(--surface-2);
    padding: var(--size-2);
    padding-inline-start: var(--size-4);
  }
  span {
    font-size: var(--font-size-3);
  }
  h2 {
    font-size: var(--font-size-4);
  }
  button {
    background-color: transparent;
    &:hover {
      color: var(--brand);
    }
  }
  @media (min-width: 50rem) {
    div {
      padding: 0;
    }
    form {
      min-width: var(--size-content-3);
    }
  }
</style>
