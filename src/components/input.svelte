<script lang="ts">
	export let name: string;
	export let value: number | null;
</script>

<div>
	<label for={name}>{name}</label>
	<input {name} {value} on:input id={name} inputmode="numeric" min="0" type="number" />
</div>

<style>
	div {
		padding-block-start: 0.5rem;
		width: 50%;
		display: flex;
		flex-direction: column;
		background-color: var(--bg-secondary);
	}

	input {
		height: 3.75rem;
		border: none;
		font-size: 2.5rem;
		background-color: var(--bg-secondary);
		padding-inline-start: 0.625rem;
		border-bottom: 2px solid transparent;
	}
	input:focus,
	input:focus-visible {
		border-bottom: 2px solid var(--accent);
		outline-style: none;
	}
	label {
		font-weight: 400;
		font-size: 1rem;
		padding-inline-start: 0.625rem;
	}
</style>
