<script lang="ts">
	import type { Def } from '../lib/definitions';
	import Input from './input.svelte';

	export let def: Def;

	let left: number | null = null;
	let right: number | null = null;

	const setBothFromLeft = (event: Event) => {
		const { value } = event.target as HTMLInputElement;
		if (!value) return (right = null);

		right = def.setFromLeft(value);
	};
	const setBothFromRight = (event: Event) => {
		const { value } = event.target as HTMLInputElement;
		if (!value) return (left = null);

		left = def.setFromRight(value);
	};
</script>

<div>
	<Input name={def.left} on:input={setBothFromLeft} value={left} />
	<Input name={def.right} on:input={setBothFromRight} value={right} />
</div>

<style>
	div {
		overflow: hidden;
		border-radius: var(--radius-2);
		display: flex;
	}
</style>
