# Astral Match

Astrología conversacional con IA. Tres servicios:

| Servicio | Glifo | Datos que pide | Salida |
|---|---|---|---|
| Carta astral | ☉ | 1 persona, fecha (hora y ciudad opcionales) | Lectura de carta natal |
| Revolución solar | ☼ | 1 persona, fecha, año a analizar, residencia actual | Lectura del año, de cumpleaños a cumpleaños |
| Compatibilidad | ☌ | 2 personas, ambas fechas | Sinastría con puntuaciones |

Los tres desembocan en el mismo chat: el astrólogo entrega el informe inicial y a partir de ahí se puede preguntar libremente. La conversación conserva todo el contexto.

## Estructura

- `index.html` — la app completa (un solo archivo: HTML + CSS + JS)
- `public/index.html` — **copia idéntica** de la anterior (ver nota de despliegue)
- `api/chat.js` — proxy serverless hacia la API de Anthropic (oculta la API key)
- `api/lead.js` — captura de leads; registra el `type` de servicio en los logs de Vercel
- `vercel.json` — configuración

## Nota de despliegue

Vercel sirve la carpeta `public/` cuando existe, así que había dos versiones de la app y una podía quedar obsoleta. De momento las dos son idénticas. Cuando confirmes cuál está sirviendo Vercel (mira el HTML en producción), borra la otra y quédate con una sola fuente de verdad.

## Deploy

1. Sube la carpeta a GitHub
2. Conecta el repo en vercel.com → "New Project"
3. Settings → Environment Variables:
   - `ANTHROPIC_API_KEY` = tu API key de Anthropic
4. Deploy

## Leads

`api/lead.js` solo hace `console.log`. Los leads quedan en los logs de Vercel, que rotan. Para conservarlos hay que escribirlos en algún sitio (Supabase, Google Sheets, un CRM).

Cada lead lleva `type`: `carta_astral`, `revolucion_solar` o `compatibilidad`.
