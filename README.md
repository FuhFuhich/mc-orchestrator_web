# mc-orchestrator-web

Статический фронтенд (vanilla JS, без сборки) для mc-orchestrator.

## Как запускается

В production обслуживается nginx-ом из `docker-compose.yml` основного репозитория
(`mine_com_server/docker-compose.yml`). Ничего собирать не нужно — просто
отдаются файлы `index.html`, `auth.html`, `assets/*`.

## Куда ходит за API

`assets/js/core/api.js` авто-определяет backend:

- `file://` или localhost → `http://localhost:8080`
- любой другой домен → `window.location.origin` (то есть тот же домен)

Принудительный override — через `assets/js/config.js`:
```js
window.__API_BASE__ = 'https://api.example.com';
```

или через DevTools:
```js
localStorage.setItem('apiBase', 'http://localhost:8080');
```

## Локальный запуск без Docker

```bash
npx http-server -p 5500
```
и открой `http://localhost:5500/auth.html`. Убедись, что backend слушает на
`http://localhost:8080` и в `APP_CORS_ALLOWED_ORIGINS` добавлен
`http://localhost:5500`.

## Endpoints, которые использует фронт

- `POST /api/auth/login`, `/api/auth/register`, `/api/auth/refresh`
- `GET /api/servers`, `/api/servers/{id}`, `/api/servers/{id}/metrics`, …
- `GET /api/nodes`, `/api/nodes/{id}`, `/api/nodes/{id}/members`, …
- `POST /api/console/{id}/command`, `GET /api/console/{id}/log`
- WebSocket: `wss://<host>/ws` (STOMP/SockJS)
