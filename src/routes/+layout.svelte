<script lang="ts">
  import 'open-props/style';
  import 'open-props/normalize';
  import 'open-props/oklch-hues';
  import 'open-props/gray-oklch.min.css';
  import 'open-props/gray-hsl.min.css';
  import 'open-props/colors-oklch.min.css';
  import '../app.css';
  import Drawer from '../components/drawer.svelte';
  import Info from '../components/info.svelte';
  import ThemeSwitch from '../components/theme-switch.svelte';
</script>

<svelte:head>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#dee2e6" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#16191d" />
</svelte:head>

<div class="layout">
  <main>
    <slot />
  </main>
  <Drawer>
    <ThemeSwitch />
    <Info />
  </Drawer>
</div>
<div data-display="desktop">
  <ThemeSwitch />
  <Info />
</div>

<style>
  .layout {
    margin-inline: auto;
    max-inline-size: var(--size-md);
    overflow: hidden;
    height: 100%;
    position: relative;
  }
  main {
    margin: var(--size-2);
    display: flex;
    flex-direction: column;
  }
  div[data-display='desktop'] {
    display: none;
  }

  @media (min-width: 640px) {
    .layout {
      max-inline-size: var(--size-xl);
    }
    main {
      margin: var(--size-4);
    }
    div[data-display='desktop'] {
      display: contents;
    }
  }
</style>
