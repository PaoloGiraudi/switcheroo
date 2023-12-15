<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import Spinner from '$lib/icons/spinner.svelte';
  import type { SubmitFunction } from '@sveltejs/kit';
  export let action: string | undefined = undefined;
  export let button: string | null = 'Submit';
  export let disabled: boolean | undefined = false;
  $: submitting = false;

  const onSubmit: SubmitFunction = () => {
    submitting = true;
    return async ({ result }) => {
      submitting = false;
      await applyAction(result);
    };
  };
</script>

<form method="post" use:enhance={onSubmit} {action}>
  <slot />
  <button type="submit" disabled={disabled || submitting}>
    <span>{button}</span>
    {#if submitting}
      <Spinner />
    {/if}
  </button>
</form>

<style>
  form {
    gap: var(--size-3);
    display: flex;
    flex-direction: column;
  }
  form :global(input) {
    background-color: var(--surface-2);
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
</style>
