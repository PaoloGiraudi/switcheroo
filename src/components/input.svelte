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
		padding-block-start: var(--size-2);
		width: 50%;
		display: flex;
		flex-direction: column;
		background-color: var(--surface);
	}

	input {
		caret-color: var(--text-2);
		height: var(--size-9);
		font-size: var(--font-size-6);
		padding-inline-start: var(--size-2);
		background-color: var(--surface);
		border-bottom: var(--border-size-2) solid transparent;
		border-radius: 0;
	}
	input:focus,
	input:focus-visible {
		border-bottom-color: var(--accent);
		outline-style: none;
	}
	label {
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-1);
		padding-inline-start: var(--size-2);
	}
</style>
