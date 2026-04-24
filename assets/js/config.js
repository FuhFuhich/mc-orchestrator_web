/**
 * Runtime API-base override.
 *
 * By default the frontend talks to the same origin it was served from
 * (which is what you want behind the nginx reverse-proxy).
 *
 * Set `window.__API_BASE__` here to force a different URL — useful when
 * opening the static files directly from disk (file://) and pointing them at
 * a local backend, or when testing the production frontend against staging.
 *
 * Leave it undefined for the default (same-origin) behaviour.
 *
 * Examples:
 *   window.__API_BASE__ = 'http://localhost:8080';
 *   window.__API_BASE__ = 'https://api.mc-orchestrator.xyz';
 */
window.__API_BASE__ = undefined;
