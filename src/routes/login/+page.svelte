<script>
  import { page } from '$app/stores';
  import { Card, Form, Message, Login } from '$lib/components';
  $: message = $page?.form?.message;
</script>

<Card title="Welcome back!">
  <Form button="Login">
    <Login />
  </Form>
  {#if message}
    <Message {message} />
  {/if}
</Card>
