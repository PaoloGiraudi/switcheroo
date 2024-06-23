<script lang="ts">
  import { version } from '$app/environment';
</script>

<div>
  <p>
    Switcheroo is based on
    <a href="https://github.com/convert-units/convert-units">convert-units</a>
  </p>
  <hr />
  <p>Found a bug? Send me an <a href="mailto:me@paologiraudi.com">email</a></p>
  <hr />
  <p>Source code on <a href="http://www.github.com/PaoloGiraudi" target="__blank">Github</a></p>
  <hr />
  <p>Made by <a href="http://www.paologiraudi.com" target="__blank">Paolo Giraudi</a></p>
  <hr />
  <p>Current version: {version}</p>
</div>

<style>
  hr {
    margin-block: var(--size-4);
    background-color: var(--surface-2);
    filter: invert(0.05);
    height: 1px;
  }
  div {
    padding: var(--size-4);
  }
  p {
    color: var(--text-2);
    font-size: var(--font-size-1);

    &:last-child {
      font-size: var(--font-size-0);
    }
  }
  a {
    color: var(--brand);
  }
</style>
