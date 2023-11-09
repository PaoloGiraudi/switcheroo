<script>
  import Field from './form/field.svelte';
</script>

<Field label="Username" name="username">
  <input name="username" id="username" type="text" placeholder="Placeholder..." />
</Field>
<Field label="Password" name="password">
  <input name="password" id="password" type="password" placeholder="********" />
</Field>

<style>
  input {
    padding-block: var(--size-2);
    font-size: var(--font-size-2);
  }
</style>
