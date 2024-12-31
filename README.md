# Remix Mantine Storybook

This project is a robust boilerplate that integrates **Remix**, **Mantine**, and **Storybook** into a single repository. It provides a solid foundation for building scalable web applications with dynamic styling and UI component libraries while maintaining a well-structured developer experience using Storybook for UI component previews.

---

## Project Overview

`remix-mantine-storybook` combines the power of:

- **Remix**: A full-stack React framework for optimized web applications.
- **Mantine**: A modern UI component library with built-in styling.
- **Storybook**: A tool to visualize, test, and document UI components.

This boilerplate is ideal for projects requiring a modular frontend with reusable components.

---

## Features

- **Remix for full-stack development**.
- **Mantine** as a comprehensive UI toolkit with built-in hooks.
- **Storybook integration** for component testing and documentation.
- **TypeScript** support for type-safe development.
- **Vite** as the development and build tool for fast bundling.
- **ESLint and Prettier** for consistent coding standards.

---

## Prerequisites

Make sure your system meets the following requirements:

- **Node.js**: >= 18.0.0
- **Yarn**: >= 4.5.3

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jsdeveloperr/remix-mantine-storybook.git
cd remix-mantine-storybook
yarn install
```

---

## Scripts

The project provides several helpful scripts:

| Command                  | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `yarn dev`               | Starts the development server.                                           |
| `yarn build`             | Builds the Remix application using Vite.                                |
| `yarn start`             | Starts the production server.                                            |
| `yarn storybook`         | Starts the Storybook development server.                                 |
| `yarn build-storybook`   | Builds the Storybook UI components into a static directory.              |
| `yarn lint`              | Runs ESLint for code quality checks.                                     |
| `yarn typecheck`         | Runs TypeScript to ensure type safety.                                   |

---

## Folder Structure

Here’s an overview of the project structure:

```
remix-mantine-storybook/
├── app/                       # Remix application folder
│   ├── components/            # Reusable UI components
│   ├── routes/                # Remix routes
│   ├── styles/                # Global and component-specific styles
├── stories/                   # Storybook stories for components
├── build/                     # Build output (ignored by git)
├── public/                    # Static assets (e.g., images)
├── .storybook/                # Storybook configuration
├── vite.config.ts             # Vite configuration
├── package.json               # Project metadata and scripts
├── tsconfig.json              # TypeScript configuration
```

---

## Storybook Integration

This project comes pre-configured with Storybook for visualizing and testing UI components.

### Running Storybook

To start Storybook in development mode, run:

```bash
yarn storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Writing Stories

Create stories for your components in the `stories/` directory. Example:

```tsx
import React from "react";
import { Button } from "../app/components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = {
  args: {
    label: "Primary Button",
    color: "blue",
    variant: "filled",
  },
};
```

---

## Development

1. **Start the development server**:

   ```bash
   yarn dev
   ```

2. **Run Storybook**:

   ```bash
   yarn storybook
   ```

3. **Lint and type-check code**:

   ```bash
   yarn lint
   yarn typecheck
   ```

---

## Building the Project

To build the project for production:

1. Build the Remix application:

   ```bash
   yarn build
   ```

2. Build Storybook:

   ```bash
   yarn build-storybook
   ```

---

## Linting and Type Checking

This project uses ESLint and TypeScript for code quality checks. Run:

```bash
yarn lint
yarn typecheck
```

Fix any linting or type issues reported in the console.

---

## License

This project is licensed under the MIT License.