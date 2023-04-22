<script lang="ts">
	import { theme } from '$lib/stores';
	import Nav from '../components/nav.svelte';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<main>
	<slot />
	<Nav />
</main>

<style>
	main {
		overflow: hidden;
		margin: 0.5rem;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 1rem);
		background-color: var(--bg-primary);
		position: relative;
	}
</style>
