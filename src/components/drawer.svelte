<script lang="ts">
	import { drawer } from '$lib/drawer';
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:window on:keydown={(e) => e.code === 'Escape' && $drawer && drawer.set(false)} />

{#if $drawer}
	<div
		data-role="backdrop"
		on:keypress
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 250 }}
		on:click={() => drawer.set(false)}
	>
		<div
			data-role="dialog"
			in:fly={{ y: 500, duration: 150 }}
			out:fly={{ y: 500, duration: 250 }}
			on:click|stopPropagation
			on:keypress|stopPropagation
		>
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
		flex-direction: column;
		align-items: flex-start;
		padding: var(--size-3);
		height: var(--size-xs);
		width: 100%;
		background-color: var(--surface-1);
		max-inline-size: var(--size-md);
		margin-inline: auto;
		border-top-left-radius: var(--radius-2);
		border-top-right-radius: var(--radius-2);
	}
</style>
