<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	export let open: Boolean;
</script>

{#if open}
	<div data-role="backdrop" on:keypress in:fade={{ duration: 150 }} out:fade={{ duration: 250 }}>
		<div data-role="dialog" in:fly={{ y: 500, duration: 150 }} out:fly={{ y: 500, duration: 250 }}>
			<slot />
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
</style>
