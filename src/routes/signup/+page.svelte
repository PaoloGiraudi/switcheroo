<script>
  import { page } from '$app/stores';
  import { Card, Form, Message, Login } from '$lib/components';
  $: message = $page?.form?.message;
</script>

<Card title="Create an account today!">
  <Form button="Sign up">
    <Login />
  </Form>
  {#if message}
    <Message {message} />
  {/if}
</Card>
