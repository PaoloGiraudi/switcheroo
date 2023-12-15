<script lang="ts">
  import Add from './add/add.svelte';
  import Delete from './delete/delete.svelte';
  export let data;
</script>

<section>
  <Add />
  <Delete userConversions={data.userToConversions || []} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: var(--size-8);
    margin-block-end: var(--size-3);
  }
</style>
