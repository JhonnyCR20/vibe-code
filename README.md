# LuxDrive Detailing CR

Sitio web multipagina para un negocio de detallado automotriz en Costa Rica (San Ramon de Alajuela), construido con Node.js, Express y EJS.

## Que incluye

- Arquitectura multipagina con componentes reutilizables.
- Diseno responsive con tema claro/oscuro:
  - Modo automatico segun el sistema/navegador.
  - Interruptor manual para pruebas.
- Seccion de servicios con selector en cascada por tipo de vehiculo:
  - Calcula precio estimado en tiempo real dentro de cada card.
  - Boton de WhatsApp por servicio.
- Formulario de contacto conectado a Google Forms.
- Seguridad backend:
  - `helmet` para cabeceras de seguridad.
  - Control de trafico con bloqueo temporal por IP.
  - Soporte para operacion detras de Cloudflare.

## Stack

- Node.js
- Express
- EJS
- CSS y JavaScript vanilla
- Helmet
- Dotenv

## Estructura principal

```text
public/
  css/styles.css        # Estilos globales, responsive y temas
  js/main.js            # Menu movil, tema y logica de precio por card

src/
  app.js                # Configuracion Express, seguridad y rutas
  server.js             # Arranque del servidor
  config/env.js         # Lectura de variables de entorno
  middlewares/securityMiddleware.js
  routes/homeRouter.js
  controllers/homeController.js
  data/siteContent.js   # Contenido del sitio y configuracion comercial
  views/
    components/         # Componentes EJS reutilizables
    pages/              # Vistas por ruta
```

## Como funciona el codigo

1. **Entrada del servidor**
   - `src/server.js` carga variables de entorno y levanta Express.

2. **App y seguridad**
   - `src/app.js` configura:
     - motor de vistas EJS,
     - archivos estaticos,
     - middleware de seguridad,
     - rutas y manejo de 404.

3. **Ruteo y renderizado**
   - `src/routes/homeRouter.js` define rutas multipagina.
   - `src/controllers/homeController.js` renderiza cada pagina.
   - `src/data/siteContent.js` centraliza contenido, precios y configuracion de marca.

4. **Frontend**
   - `public/js/main.js` implementa:
     - animaciones de entrada,
     - tema auto/manual,
     - calculo de precio por tipo de vehiculo en la pagina de servicios.
   - `public/css/styles.css` contiene el sistema visual completo.

## Requisitos

- Node.js 18+ recomendado
- npm 9+ recomendado

## Instalacion y ejecucion local

```bash
npm install
npm run dev
```

Servidor local por defecto: `http://localhost:3000`

Para modo produccion:

```bash
npm start
```

## Configuracion

1. Copia variables de ejemplo:
   - `.env.example` -> `.env`

2. Ajusta variables segun tu entorno:
   - `PORT`
   - `TRUST_PROXY`
   - `REQUIRE_CLOUDFLARE_PROXY`
   - `RATE_LIMIT_MAX_REQUESTS`
   - `RATE_LIMIT_WINDOW_MS`
   - `RATE_LIMIT_BLOCK_MS`

3. Personaliza datos comerciales en:
   - `src/data/siteContent.js`

## Nota de privacidad

Este repositorio no incluye numero personal de WhatsApp. Los campos de telefono/WhatsApp usan valores de ejemplo y deben reemplazarse por datos oficiales del negocio.

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

Consulta el archivo [LICENSE](LICENSE) para el texto completo.