<script lang="ts">
	import { setTheme, theme } from '$lib/theme';
	import { version } from '$app/environment';
</script>

<div data-role="group">
	<label for="theme-selector">Select theme</label>
	<button type="button" data-selected={$theme === 'dark'} on:click={() => setTheme('dark')}>
		Dark
	</button>
	<button type="button" data-selected={$theme === 'light'} on:click={() => setTheme('light')}>
		Light
	</button>
</div>
<div data-role="info">
	<p>Made by <a href="http://www.paologiraudi.com" target="__blank">Paolo</a></p>
	<p>Source code on <a href="http://www.github.com/PaoloGiraudi" target="__blank">Github</a></p>
	<p>Current version: {version}</p>
</div>

<style>
	div[data-role='group'] {
		gap: var(--size-fluid-1);
		align-items: center;
		display: flex;
		width: 100%;
	}
	div[data-role='info'] {
		position: fixed;
		bottom: var(--size-3);
	}

	label {
		font-size: var(--font-size-fluid-1);
		margin-inline-end: auto;
		font-weight: var(--font-weight-4);
	}

	button {
		padding-inline: var(--size-fluid-3);
		padding-block: var(--size-fluid-1);
		color: var(--text);
		font-size: var(--font-size-fluid-1);
		background-color: var(--surface-2);
		border-radius: var(--radius-2);
		font-weight: var(--font-weight-5);
	}

	button[data-selected='true'] {
		cursor: pointer;
		color: var(--gray-2);
		background-color: var(--brand);
	}
	p {
		font-size: var(--font-size-fluid-0);
	}
</style>
