<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/colors-hsl';
	import '../app.css';
	import Settings from '../components/settings.svelte';
	import Close from '../components/icons/close.svelte';
	import SettingsIcon from '../components/icons/settings.svelte';
	import Drawer from '../components/drawer.svelte';
	import { drawer } from '$lib/drawer';
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
		<Settings />
	</Drawer>
	<button on:click={() => drawer.set(!$drawer)}>
		<svelte:component this={$drawer ? Close : SettingsIcon} />
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
		border-radius: var(--radius-2);
		color: var(--gray-3);
		display: grid;
		place-items: center;
		height: var(--size-fluid-5);
		aspect-ratio: var(--ratio-square);
		position: absolute;
		background: var(--brand);
		bottom: var(--size-3);
		right: var(--size-3);
	}
</style>
