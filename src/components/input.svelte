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
		width: 50%;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	input {
		font-family: 'Rubik', sans-serif;
		height: 4rem;
		border: 2px solid gray;
		border-left: none;
		border-right: none;
		font-size: 2.5rem;
	}
	label {
		font-weight: 400;
		font-family: 'Rubik', sans-serif;
		font-size: 1rem;
		line-height: 1rem;
		z-index: 1;
		top: -0.5rem;
		left: 0.75rem;
		padding: 0 5px;
		background-color: white;
		position: absolute;
	}
</style>
