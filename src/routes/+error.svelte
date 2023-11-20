<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<h2>Oops! Something went wrong :(</h2>
<p>
  Try to refresh the page or go back to the
  <a href="/" data-sveltekit-preload-data="hover">Home</a>
</p>
