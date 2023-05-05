<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import 'open-props/colors-hsl';
	import '../app.css';
	import Settings from '../components/settings.svelte';
	import Close from '../components/icons/close.svelte';
	import SettingsIcon from '../components/icons/settings.svelte';
	import Drawer from '../components/drawer.svelte';
	let open = false;

	const handleOpen = () => (open = !open);
</script>

<svelte:head>
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#dee2e6" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#16191d" />
</svelte:head>

<div class="layout">
	<main>
		<slot />
	</main>
	<Drawer bind:open>
		<Settings />
	</Drawer>
	<button on:click={handleOpen}>
		<svelte:component this={open ? Close : SettingsIcon} />
	</button>
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
	button {
		color: var(--gray-3);
		display: grid;
		place-items: center;
		height: var(--size-9);
		width: var(--size-9);
		position: absolute;
		background: var(--accent);
		bottom: var(--size-3);
		right: var(--size-3);
	}
</style>
