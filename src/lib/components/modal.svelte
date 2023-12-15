<script lang="ts">
  import Close from '$lib/icons/close.svelte';

  let dialog: HTMLDialogElement;
  export let open: boolean;

  $: open && dialog && dialog.showModal();
  $: !open && dialog && dialog.close();

  function handleClose() {
    dialog.close();
    history.back();
  }
</script>

<dialog
  role=""
  bind:this={dialog}
  on:click={(e) => {
    if (e.target === dialog) {
      handleClose();
    }
  }}
  on:keydown={(e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }}
>
  <button on:click={() => handleClose()}>
    <Close />
  </button>
  <div>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    position: relative;
    padding: 0;
    width: 100%;
  }
  dialog::backdrop {
    background: var(--surface-2);
  }

  button {
    padding-inline: 0;
    position: absolute;
    right: var(--size-3);
    top: var(--size-3);
  }

  @media (min-width: 50rem) {
    dialog {
      width: min-content;
    }
  }
</style>
