<script lang="ts">
  import { version } from '$app/environment';
</script>

<div data-role="info">
  <p>Made by <a href="http://www.paologiraudi.com" target="__blank">Paolo</a></p>
  <p>Source code on <a href="http://www.github.com/PaoloGiraudi" target="__blank">Github</a></p>
  <p>Current version: {version}</p>
</div>

<style>
  div {
    position: fixed;
    bottom: var(--size-4);
    left: var(--size-4);
  }
  p {
    color: var(--text-2);
    font-size: var(--font-size-0);
  }
  a {
    color: var(--brand);
  }
</style>
