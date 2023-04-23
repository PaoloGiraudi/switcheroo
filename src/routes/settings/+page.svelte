<script>
	import Radio from '../../components/radio.svelte';
</script>

<div>
	<Radio value="system">System</Radio>
	<Radio value="dark">Dark</Radio>
	<Radio value="light">Light</Radio>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}
</style>
