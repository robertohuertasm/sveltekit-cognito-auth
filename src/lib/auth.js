import { SvelteKitAuth, Providers } from 'sk-auth';

// this is the domain we set up in our Cognito Pool
const DOMAIN = 'sveltekit.auth.eu-west-1.amazoncognito.com';

// these are the configuration seetings for our OAUTH2 provider
const config = {
	accessTokenUrl: `https://${DOMAIN}/oauth2/token`,
	profileUrl: `https://${DOMAIN}/oauth2/userInfo`,
	authorizationUrl: `https://${DOMAIN}/oauth2/authorize`,
	redirect: 'https://robertohuertas.com',
	clientId: import.meta.env.VITE_CLIENT_ID,
	clientSecret: import.meta.env.VITE_CLIENT_SECRET,
	scope: ['openid', 'email'],
	id: 'cognito',
	contentType: 'application/x-www-form-urlencoded'
};

const oauthProvider = new Providers.OAuth2Provider(config);

// exposing our auth object
export const appAuth = new SvelteKitAuth({
	providers: [oauthProvider]
});
