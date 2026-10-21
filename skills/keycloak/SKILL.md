---
name: keycloak
description: Use when asked to set up, configure, secure, or troubleshoot Keycloak, the open-source identity and access management server, including realms, clients, users, roles, single sign-on with OpenID Connect or SAML, identity brokering, and deployment. Distinct from [[threat-modeling]], which analyzes risks without configuring an identity provider.
---

# Keycloak

Keycloak (<https://www.keycloak.org/>) is an open-source identity and access
management server. It provides single sign-on (SSO), user management,
OpenID Connect (OIDC), OAuth 2.0, and SAML 2.0 so that applications do not
have to implement login themselves. It is a Cloud Native Computing Foundation
project.

## Input required

- The applications to protect, and whether each is a browser app, a server-side
  web app, a mobile app, or an API.
- The protocol each application supports: OIDC or SAML.
- Where users live: Keycloak itself, LDAP or Active Directory, or an external
  identity provider such as Google, GitHub, or a corporate SSO.
- The deployment target: local development, container, Kubernetes, or virtual
  machine, and the database and hostname to use.
- The Keycloak version, because configuration options change between releases.

## Questions to ask first

Ask these in one batch, and skip any the user has already answered:

1. Which applications and APIs need login, and which protocol does each use?
2. Where should user accounts come from?
3. Is this development or production, and how will it be deployed?
4. Which login requirements apply: multi-factor authentication, passkeys,
   social login, password policy, or self-registration?
5. Which Keycloak version is in use?

## Core concepts

- **Realm.** An isolated space that holds its own users, clients, roles, and
  settings. The built-in `master` realm administers Keycloak; create a
  separate realm for your applications rather than using `master`.
- **Client.** An application or service that asks Keycloak to authenticate
  users or to issue tokens. A client is public (cannot keep a secret, such as a
  single-page app) or confidential (can keep a secret, such as a server-side
  app).
- **User, group, and role.** Users belong to groups and hold realm roles or
  client roles. Applications read roles from tokens to authorize actions.
- **Client scope and mapper.** Control which claims appear in tokens.
- **Identity brokering and user federation.** Brokering delegates login to an
  external identity provider. Federation reads users from LDAP or Active
  Directory.
- **Authentication flow.** The ordered steps of login, which can add
  multi-factor authentication, passkeys, or custom conditions.

## Method

1. **Run Keycloak.** For local development, use the container image:

   ```sh
   docker run -p 8080:8080 \
     -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
     -e KC_BOOTSTRAP_ADMIN_PASSWORD=change-me \
     quay.io/keycloak/keycloak:latest start-dev
   ```

   `start-dev` is for development only. It uses an embedded database and
   relaxed security. Pin an exact image version instead of `latest` for
   anything you keep.
2. **Create a realm** for the applications, and leave `master` for
   administration.
3. **Register a client** per application. Choose the protocol, set exact valid
   redirect URIs and web origins, and prefer the authorization code flow with
   PKCE for browser and mobile apps. Avoid the implicit flow and wildcard
   redirect URIs.
4. **Model access.** Create roles and groups, assign them to users, and add
   mappers so the needed roles and claims reach the token.
5. **Add users or connect a source.** Create users, configure LDAP federation,
   or add an identity provider for brokering.
6. **Harden login.** Set a password policy, require multi-factor
   authentication or passkeys where appropriate, and configure brute-force
   detection and email verification.
7. **Integrate the application.** Use the OIDC discovery document at
   `/realms/<realm>/.well-known/openid-configuration` and a standard OIDC
   library or the Keycloak adapter guidance for the framework. Validate
   tokens by signature, issuer, audience, and expiry.
8. **Move to production.** Use `start` with a hostname, TLS, and an external
   database such as PostgreSQL (see [[postgresql-database]]). Run more than one
   node behind a load balancer for availability, and place Keycloak behind a
   reverse proxy with correct forwarded headers.
9. **Automate and back up.** Export realm configuration or manage it as code,
   keep it in version control without secrets, and back up the database.

## Output format

Give the answer as:

1. The decisions made: realm layout, clients, protocols, and user source.
2. Configuration steps or commands, in order, with placeholders for secrets.
3. Application-side settings: issuer URL, client ID, redirect URIs, and scopes.
4. A short hardening and production checklist.
5. Open questions and assumptions, including the Keycloak version.

## Ground rules

- Never put real secrets, passwords, or client secrets in answers or files;
  use placeholders and environment variables.
- State the Keycloak version assumed, and check the official documentation for
  option names, because they change between releases.
- Prefer standards (OIDC, OAuth 2.0 with PKCE, SAML 2.0) over custom token
  handling.
- Use exact redirect URIs and the least privilege that works.
- Do not use `start-dev` or the `master` realm for production applications.

## Self-check before answering

- Is each client public or confidential, and does its flow match?
- Are redirect URIs and web origins exact?
- Do tokens carry only the claims and roles the application needs?
- Is the application validating issuer, audience, signature, and expiry?
- Are TLS, hostname, database, and backups addressed for production?

## Common pitfalls

- Using the `master` realm for application users.
- Wildcard redirect URIs, which enable token theft through open redirects.
- Treating a single-page app as a confidential client and shipping a secret
  in browser code.
- Running `start-dev` in production.
- Misconfigured reverse proxy or hostname, which breaks redirects and issuer
  checks.
- Trusting token contents without verifying the signature.
- Copying configuration from an older version without checking that the option
  still exists.

## Example prompt

> Set up Keycloak for a React single-page app and a Node API. Users should log
> in with email and password plus a second factor, and the API should only
> accept tokens with the `orders:write` role.

## Learn more

- Keycloak: <https://www.keycloak.org/>
- Documentation: <https://www.keycloak.org/documentation>
- Getting started guides: <https://www.keycloak.org/guides>
- Source code: <https://github.com/keycloak/keycloak>
