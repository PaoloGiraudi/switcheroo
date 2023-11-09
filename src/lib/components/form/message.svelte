<script lang="ts">
  export let message: string;
</script>

<div>
  <p>{message}</p>
</div>

<style>
  div {
    border: var(--border-size-1) solid var(--warning);
    padding: var(--size-2);
    border-radius: var(--radius-2);
  }
</style>
