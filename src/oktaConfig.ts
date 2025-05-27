const CLIENT_ID = import.meta.env.VITE_OKTA_CLIENT_ID || '{clientId}';
const ISSUER = import.meta.env.VITE_OKTA_ISSUER || 'https://livingstonintl.okta.com';
const OKTA_TESTING_DISABLEHTTPSCHECK = import.meta.env.VITE_OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = import.meta.env.VITE_PUBLIC_URL || '';
const REDIRECT_URI = `${BASENAME}/login/callback`;

const oktaConfig = {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: REDIRECT_URI,
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
};

export default oktaConfig;
