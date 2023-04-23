<script lang="ts">
	import { page } from '$app/stores';
	import Close from './icons/close.svelte';
	import Settings from './icons/settings.svelte';

	const routes: Record<string, { to: string; icon: ConstructorOfATypedSvelteComponent }> = {
		'/': {
			to: '/settings',
			icon: Settings
		},
		'/settings': {
			to: '/',
			icon: Close
		}
	};

	$: path = $page.url.pathname;
</script>

<a href={routes[path].to} data-sveltekit-preload-data="tap">
	<svelte:component this={routes[path].icon} />
</a>

<style>
	a {
		display: grid;
		place-items: center;
		height: 4rem;
		width: 4rem;
		position: absolute;
		background: var(--accent);
		bottom: 1rem;
		right: 1rem;
		border: none;
	}
</style>
