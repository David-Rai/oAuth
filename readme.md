# OAuth in simple terms
Imagine you want to let a third-party app (like a game or a website) access some info from your Google or Facebook account — but without giving them your password. OAuth2 helps with that securely.

## Main players
- Resources owner - user(you)
- Client - Third party application (omegle,games)
- Authorization server - The server that grant permission(eg:google,facebook)
- Resources server - where your data lives (eg:google database,API)

# OAuth flow
<img src="https://frontegg.com/wp-content/webp-express/webp-images/uploads/2024/08/oauth-overview.png.webp">

<img src="./architecture/oauthflow.png">

# OAuth flow types
## Authorization code flow(common flow)
  you are redirected into the authorization server of resources provider and it redirect you to the client (3 third party) application with access-token and client request the resources server to get your details without credentials

## Resource owner password flow 
It is same as the authorization code flwo but it takes your email,password and request to the authorization server it self

