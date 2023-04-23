<script lang="ts">
	import { theme } from '$lib/stores';
	export let value: string;
</script>

<label>
	<input type="radio" name="theme" {value} bind:group={$theme} />
	<slot />
</label>

<style>
	label {
		font-size: 1.5rem;
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.75em;
	}

	input[type='radio'] {
		-webkit-appearance: none;
		appearance: none;
		background-color: var(--bg-primary);
		margin: 0;
		font: inherit;
		color: currentColor;
		width: 1.15em;
		height: 1.15em;
		border: 0.15em solid currentColor;
		border-radius: 50%;
		transform: translateY(0.075em);
		display: grid;
		place-content: center;
	}

	input[type='radio']::before {
		content: '';
		width: 0.6em;
		height: 0.6em;
		border-radius: 50%;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--accent);
		background-color: CanvasText;
	}

	input[type='radio']:checked::before {
		transform: scale(1);
	}

	input[type='radio']:focus-visible {
		outline: max(2px, 0.1em) solid var(--accent);
		outline-offset: max(2px, 0.1em);
	}
</style>
