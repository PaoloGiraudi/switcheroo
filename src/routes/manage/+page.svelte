<script lang="ts">
  import Add from './add/add.svelte';
  import Delete from './delete/delete.svelte';
</script>

<section>
  <Add />
  <Delete />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: var(--size-8);
    margin-block-end: var(--size-3);
  }
</style>
