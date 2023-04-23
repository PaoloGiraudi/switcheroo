<script lang="ts">
	import { theme } from '$lib/stores';
	import Nav from '../components/nav.svelte';
</script>

<svelte:head>
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f3f3f3" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#101010" />
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
