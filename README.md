# Ciudad Secreta - Landing Page + Analytics

Landing page de marketing para la campaña gamificada Ciudad Secreta del videojuego Dune: Arrakis Dominion.

## Tracking Analytics

El proyecto incluye un sistema custom de analytics integrado con Neon:

- **Sesiones**: visitantes únicos, tiempo en sitio, dispositivo, navegador
- **Eventos**: page views, clicks, eventos custom
- **Estadísticas**:endpoint `/api/analytics/stats`

## Setup

1. **Neon**: Crear proyecto en https://console.neon.tech
2. **Schema**: Ejecutar `NEON_SCHEMA.sql` en el query editor
3. **Variables**: Copiar `.env.example` a `.env` y agregar connection string
4. **Deploy**: Vercel automáticamente usa las variables de entorno

## Tech Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Vercel (hosting)
- Neon (PostgreSQL)
