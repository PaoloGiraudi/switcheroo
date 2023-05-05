<script lang="ts">
	import { setTheme, theme } from '$lib/theme';
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

<style>
	div[data-role='group'] {
		gap: var(--size-2);
		align-items: center;
		display: flex;
		width: 100%;
		height: var(--size-8);
	}

	label {
		font-size: var(--font-size-2);
		margin-inline-end: auto;
		font-weight: var(--font-weight-5);
	}

	button {
		padding-inline: var(--size-5);
		padding-block: var(--size-2);
		color: var(--text);
		font-size: var(--font-size-3);
		background-color: transparent;
		outline: none;
		transition: none;
		border-color: var(--text-2);
		font-weight: var(--font-weight-5);
	}

	button[data-selected='true'] {
		cursor: pointer;
		color: var(--gray-2);
		background-color: var(--accent);
	}
</style>
