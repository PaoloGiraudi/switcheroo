<script lang="ts">
  import '@fontsource/poppins/latin-400.css';
  import '@fontsource/poppins/latin-500.css';
  import '../styles/reset.css';
  import '../styles/app.css';
  import { Modal, Navbar } from '$lib/components';
  import type { LayoutData } from './$types';
  import { goto, preloadData, pushState } from '$app/navigation';
  import LoginPage from './login/+page.svelte';
  import SignupPage from './signup/+page.svelte';
  import { page } from '$app/stores';

  export let data: LayoutData;
  let open = false;

  async function onClick(e: MouseEvent & { currentTarget: HTMLAnchorElement }) {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();

    const { href, pathname } = e.currentTarget;

    const result = await preloadData(href);

    if (result.type === 'loaded' && result.status === 200) {
      pushState(href, { page: pathname });
    } else {
      goto(href);
    }
  }

  $: if ($page.state.page) {
    open = true;
  } else {
    open = false;
  }
</script>

<svelte:head>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#dee2e6" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#16191d" />
</svelte:head>

<div class="layout">
  <Navbar user={data.username} handleClick={onClick}></Navbar>
  <main>
    <slot />
  </main>
</div>

<Modal {open}>
  {#if $page.state.page === '/login'}
    <LoginPage />
  {:else if $page.state.page === '/signup'}
    <SignupPage />
  {/if}
</Modal>

<style>
  .layout {
    height: 100dvh;
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
