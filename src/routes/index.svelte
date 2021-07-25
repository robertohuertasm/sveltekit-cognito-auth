<script>
    import { signOut as authSignOut } from 'sk-auth/client';
	import { session } from '$app/stores';

    // getting the user from the store
    $: user = $session.user;

    function signIn() {
        location.assign('/api/auth/signin/cognito?redirect=/');
    }

    function signOut() {
        authSignOut().then(session.set);
    }
</script>

<svelte:head>
	<title>SvelteKit - Cognito</title>
</svelte:head>

{#if !user}
    <button on:click="{signIn}">Log In with Cognito</button>
{:else}
    <h2>Welcome {user.email}!</h2>
	<p>Your username is {user.username} and your email has been verified: {user.email_verified}</p>

    <button on:click={signOut}>Log Out</button>
{/if}
