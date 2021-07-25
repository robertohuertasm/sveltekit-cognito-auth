// we're importing our auth object
import { appAuth } from '$lib/auth';
// and exposing the get and post method handlers
export const { get, post } = appAuth;
