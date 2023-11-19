<script lang="ts">
  import 'open-props/style';
  import 'open-props/normalize';
  import 'open-props/oklch-hues';
  import 'open-props/gray-oklch.min.css';
  import 'open-props/gray-hsl.min.css';
  import 'open-props/colors-oklch.min.css';
  import '../styles/app.css';
  import '../styles/reset.css';
  import { Navbar } from '../lib/components';
  import type { LayoutData } from './$types';
  export let data: LayoutData;
</script>

<svelte:head>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#dee2e6" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#16191d" />
</svelte:head>

<div class="layout">
  <Navbar user={data.username} />
  <main>
    <slot />
  </main>
</div>

<style>
  .layout {
    height: 100dvh;
    margin-inline: auto;
    position: relative;
  }
  main {
    padding: var(--size-2);
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
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
