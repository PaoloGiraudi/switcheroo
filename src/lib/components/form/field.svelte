<script lang="ts">
  export let label: string;
  export let name: string;
</script>

<div class="field">
  <label for={name}>{label}</label>
  <slot />
</div>

<style>
  .field {
    display: flex;
    gap: var(--size-1);
    flex-direction: column;
    & label {
      font-size: var(--font-size-1);
      font-weight: 500;
    }
  }
</style>
