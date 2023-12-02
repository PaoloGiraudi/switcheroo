<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import { capitalize } from '$lib/helpers/formatters';
  import Trash from '$lib/icons/trash.svelte';
  import type { conversions } from '$lib/server/schema';
  import type { SubmitFunction } from '@sveltejs/kit';

  type Conversion = typeof conversions.$inferSelect;

  export let userConversions: { conversions: Conversion }[];

  const onSubmit: SubmitFunction = () => {
    return async ({ result, formElement }) => {
      if (result.type === 'success') {
        formElement.remove();
        await invalidateAll();
      }
      await applyAction(result);
    };
  };
</script>

<div>
  <h2>Your dashboard</h2>
  {#each userConversions as { conversions }}
    <form method="post" action="/dashboard/manage?/delete" use:enhance={onSubmit}>
      <input type="hidden" name="id" id="id" value={conversions.id} />
      <span>{`${capitalize(conversions.left)} → ${capitalize(conversions.right)}`}</span>
      <button type="submit">
        <Trash />
      </button>
    </form>
  {/each}
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

    box-shadow: var(--shadow-2);
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
  @media (min-width: 640px) {
    div {
      padding: 0;
    }
    form {
      min-width: var(--size-content-3);
    }
  }
</style>
