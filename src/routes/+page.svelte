<script lang="ts">
	import Field from '../components/field.svelte';
	import { definitions } from '../lib/definitions';
	import { conversions } from '../lib/conversions';
</script>

<div>
	{#each conversions as conversion}
		<Field def={definitions[conversion]} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
