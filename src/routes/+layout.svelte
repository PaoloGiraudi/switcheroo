<main>
	<slot />
</main>

<style>
	main {
		overflow: hidden;
		margin: 0.5rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		border: 2px solid red;
		height: calc(100vh - 1rem);
		padding-top: 2rem;
	}
</style>
