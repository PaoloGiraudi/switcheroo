<script lang="ts">
  import '@fontsource/poppins/latin-400.css';
  import '@fontsource/poppins/latin-500.css';
  import '../styles/reset.css';
  import '../styles/app.css';
  import Navbar from '$lib/components/navbar.svelte';
</script>

<svelte:head>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#dee2e6" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#16191d" />
</svelte:head>

<div class="layout">
  <Navbar />
  <main>
    <slot />
  </main>
</div>

<style>
  .layout {
    height: 100svh;
    margin-inline: auto;
    position: relative;
  }
  main {
    padding-block: var(--size-2);
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 50rem) {
    .layout {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    main {
      height: 100%;
      padding-block-start: var(--size-6);
      display: flex;
      align-items: center;
    }
  }
</style>
