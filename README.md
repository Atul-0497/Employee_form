# employee-form

A small Next.js + TypeScript + Tailwind CSS project for an employee form UI.

This repository contains a multi-section employee form (personal, work, images, other) and a table view. It demonstrates using React Hook Form, Zod for validation, and Tailwind for styling.

## Features

- Multi-section employee form components
- Client-side form validation with `react-hook-form` and `zod`
- Reusable UI components in `src/components/ui`
- Simple API service layer in `src/features/employee/services`

## Tech stack

- Next.js
- React + TypeScript
- Tailwind CSS
- react-hook-form, zod

## Getting started

Prerequisites: Node.js (16+) and npm.

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Lint (if configured):

```bash
npm run lint
```

## Project structure

- `app/` — Next.js app routes and global styles
- `public/` — Static assets
- `src/components/ui/` — Reusable UI primitives
- `src/features/employee/` — Employee feature (components, hooks, services, types)
- `src/lib/` — Utility helpers

## Key files

- `src/features/employee/components/EmployeeForm.tsx` — main form component
- `src/features/employee/hooks/useEmployee.ts` — form hook
- `src/features/employee/services/employeeApi.ts` — API service
- `src/features/employee/types/employee.schema.ts` — validation schemas

## Notes

This README is a starting point — update with environment variables, deployment instructions, and any API details as needed.
