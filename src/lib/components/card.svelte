<script lang="ts">
  export let title: string | null = null;
  export let sub: string | null = null;
</script>

<div class="card">
  <h1>{title}</h1>
  {#if sub}
    <p>{sub}</p>
  {/if}
  <slot />
</div>

<style>
  .card {
    border-radius: var(--radius-2);
    display: flex;
    flex-direction: column;
    border: var(--border-size-1) solid var(--surface-2);
    box-shadow: var(--shadow-2);
    padding: var(--size-4);
    gap: var(--size-4);
  }

  h1 {
    font-size: var(--font-size-5);
  }
  p {
    font-size: var(--font-size-2);
  }

  @media (min-width: 640px) {
    .card {
      padding: var(--size-6);
      min-width: var(--size-content-3);
    }
  }
</style>
