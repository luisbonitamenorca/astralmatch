# Astral Match

Aplicación de compatibilidad astrológica con IA.

## Deploy en Vercel

1. Sube esta carpeta a GitHub (repo nuevo)
2. Conecta el repo en vercel.com → "New Project"
3. En Settings → Environment Variables, añade:
   - Key: `ANTHROPIC_API_KEY`
   - Value: tu API key de Anthropic
4. Deploy → listo

## Estructura
- `api/chat.js` — proxy serverless (oculta la API key)
- `public/index.html` — la app completa
- `vercel.json` — configuración de rutas
