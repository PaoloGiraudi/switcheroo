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
		padding-top: 8px;
		width: 50%;
		display: flex;
		flex-direction: column;
		background-color: var(--bg-secondary);
	}

	input {
		height: 3.5rem;
		border: none;
		font-size: 2.5rem;
		/* background: linear-gradient(var(--bg-primary) 0 10%, var(--bg-secondary)); */
		background-color: var(--bg-secondary);
		padding: 0 8px;
		border-bottom: 2px solid transparent;
	}
	input:focus,
	input:focus-visible {
		border-bottom: 2px inset var(--accent);
		outline-style: none;
	}
	label {
		font-weight: 400;
		font-size: 0.75rem;
		padding: 0 8px;
	}
</style>
