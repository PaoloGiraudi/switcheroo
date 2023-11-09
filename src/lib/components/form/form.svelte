<script lang="ts">
  import { enhance } from '$app/forms';
  export let button: string | null = null;
  export let disabled: boolean | undefined = false;
</script>

<form method="POST" use:enhance>
  <slot />
  <button type="submit" {disabled}>
    <span>{button}</span>
  </button>
</form>

<style>
  form {
    gap: var(--size-3);
    display: flex;
    flex-direction: column;
  }
  button {
    margin-block-start: var(--size-2);
    background-color: var(--brand);
    padding-block: var(--size-2);
    border-radius: var(--radius-2);
    color: #000;
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
