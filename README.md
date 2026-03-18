# AvailLogic - AI & Data Workflow Development

AvailLogic specializes in AI and data workflow development services, providing senior-level engineering for predictive analytics, customer intelligence, and process automation.

## Purpose

This website serves as the professional portfolio and service landing page for AvailLogic, showcasing core services and case studies for specialized AI and data solutions.

## Development

This project is built with React, TypeScript, and Vite.

### Prerequisites

- Node.js (Latest LTS recommended)
- `pnpm` (recommended package manager)

### Build

To compile the application for production:

```bash
pnpm build
```

The production assets will be generated in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
pnpm preview
```

### Deployment

The project is configured for deployment on **Netlify**. 

- **Build Command**: `pnpm install --prefer-offline && rm -rf node_modules/.vite-temp && tsc -b && BUILD_MODE=prod vite build`
- **Publish Directory**: `dist`

Deployment settings are maintained in the `netlify.toml` file.
