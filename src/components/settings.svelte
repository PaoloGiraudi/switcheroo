<script lang="ts">
	import { setTheme, theme } from '$lib/theme';
	import { fade, fly } from 'svelte/transition';
	export let open: Boolean;
</script>

{#if open}
	<div data-role="backdrop" on:keypress in:fade={{ duration: 150 }} out:fade={{ duration: 250 }}>
		<div data-role="dialog" in:fly={{ y: 500, duration: 150 }} out:fly={{ y: 500, duration: 250 }}>
			<div data-role="group">
				<label for="theme-selector">Select theme</label>
				<button
					type="button"
					data-selected={$theme === 'dark'}
					on:click={() => setTheme('dark')}
					id="theme-selector"
				>
					Dark
				</button>
				<button
					type="button"
					data-selected={$theme === 'light'}
					on:click={() => setTheme('light')}
					id="theme-selector"
				>
					Light
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	div[data-role='backdrop'] {
		position: fixed;
		display: flex;
		align-items: flex-end;
		top: 0;
		left: 0;
		min-height: 100%;
		width: 100%;
		background-color: hsl(var(--gray-11-hsl) / 10%);
		backdrop-filter: blur(var(--size-1));
	}
	div[data-role='dialog'] {
		display: flex;
		padding: var(--size-3);
		height: var(--size-xs);
		width: 100%;
		background-color: var(--surface);
	}

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
	}

	button[data-selected='true'] {
		cursor: pointer;
		color: var(--gray-3);
		background-color: var(--accent);
	}
</style>
