This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech:

- Core:

![NextJS](https://img.shields.io/badge/Next.js-16.0.1-000000?logo=next.js&logoColor=000000)
![ReactJS](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=06B6D4)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=3178C6)

- 3D & Animation:

![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?logo=greensock&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/@react_three/fiber-9.4.0-000000?logo=three.js&logoColor=white)
![React Three Drei](https://img.shields.io/badge/@react_three/drei-10.7.6-000000?logo=three.js&logoColor=white)
![React Three Postprocessing](https://img.shields.io/badge/@react_three/postprocessing-3.0.4-000000?logo=three.js&logoColor=white)
![GSAP React](https://img.shields.io/badge/@gsap/react-2.1.2-88CE02?logo=greensock&logoColor=white)

## Getting Started

First, run the development server:

```bash
pnpm i

pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### tested in:

![Node.js](https://img.shields.io/badge/Node.js-v20.19.0-339933?logo=node.js&logoColor=white)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## project structure:

```
project-x/
├─ messages/        # i18n messages
├─ public/          # static assets
├─ src/
│ ├─ app/           # Next.js App Router
│ │ └─ [locale]/    # locale-based routing
│ │
│ ├─ components/
│ │ ├─ ui/          # base UI components
│ │ ├─ layout/      # header, footer
│ │ └─ sections/    # page-specific sections
│ │   ├─ home/
│ │   ├─ blogs/
│ │   └─ profile/
│ │
│ ├─ hooks/
│ ├─ libs/
│ ├─ configs/
│ ├─ utils/
│ ├─ i18n/
│ ├─ services/
│ ├─ providers/
│ └─ middlewares/
│
└─ README.md

```

## project detailes structure for inspection:

```
project-x/
├─ public/
│  └─ assets/
│     ├─ svg/
│     ├─ images/
│     └─ 3d-assets/
│
├─ messages/
│  ├─ en.json
│  ├─ tr.json
│  └─ fa.json
│
├─ src/
│  ├─ app/
│  │  ├─ globals.css          # Global styles (Tailwind / base styles)
│  │  └─ [locale]/            # Locale-based routing (Next.js App Router)
│  │     ├─ layout.tsx        # Locale-aware root layout
│  │     ├─ page.tsx          # Home page
│  │     ├─ blogs/
│  │     │  ├─ page.tsx       # Blogs list
│  │     │  └─ [slug]/
│  │     │     └─ page.tsx    # Blog details
│  │     └─ profile/
│  │        └─ page.tsx       # User profile page
│  │
│  ├─ components/
│  │  ├─ ui/                  # Headless & reusable UI primitives
│  │  │  ├─ button.tsx
│  │  │  ├─ dropdown-menu.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ modal.tsx
│  │  │  └─ icons/
│  │  │     ├─ instagram.icon.tsx
│  │  │     ├─ telegram.icon.tsx
│  │  │     └─ twitter.icon.tsx
│  │  │
│  │  ├─ button/              # Feature-aware button components
│  │  │  └─ theme-switch.button.tsx
│  │  │
│  │  ├─ dropdown/            # Feature-aware dropdown components
│  │  │  └─ language-select.tsx
│  │  │
│  │  ├─ features/            #
│  │  │  └─ service-card.tsx
│  │  │
│  │  ├─ form/                # Composed forms (UI + logic)
│  │  │  ├─ login-form.tsx
│  │  │  └─ contact-form.tsx
│  │  │
│  │  ├─ layout/              # Application layout components
│  │  │  ├─ header.tsx
│  │  │  └─ footer.tsx
│  │  │
│  │  ├─ sections/            # Page-specific sections
│  │  │  └─ home/
│  │  │     ├─ about-us
│  │  │     │ ├─ about-us.sec.tsx
│  │  │     │ └─ about-us.data.ts
│  │  │     │
│  │  │     ├─ contact-us.sec.tsx
│  │  │     └─ hero.tsx
│  │  │
│  │  ├─ canvas/              # Three.js / R3F related components
│  │  │  ├─ computer-desk.tsx
│  │  │  ├─ loader.tsx
│  │  │  └─ stars.tsx
│  │  │
│  │  └─ common/              #
│  │     ├─ logo.tsx
│  │     ├─ social-networks.tsx
│  │     ├─ stars-background.tsx
│  │     └─ section-wrapper.hoc.tsx
│  │
│  ├─ hooks/                  # Shared custom React hooks
│  │  ├─ use-change-locale.ts
│  │  └─ use-scroll-to-position.ts
│  │
│  ├─ libs/                   # Third-party wrappers & clients
│  │  └─ axios-client.ts
│  │
│  ├─ configs/                # Static configuration objects
│  │  ├─ axios.config.ts
│  │  ├─ footer-quick-links.config.ts
│  │  ├─ header-nav.config.ts
│  │  └─ language-select.config.ts
│  │
│  ├─ utils/                  # Pure utility functions
│  │  ├─ set-lang-dir.ts
│  │  └─ cn.ts
│  │
│  ├─ i18n/                   # Internationalization utilities
│  │  ├─ navigations.ts
│  │  ├─ request.ts
│  │  └─ routing.ts
│  │
│  ├─ services/               # Business logic & API services
│  │  └─ article.service.ts
│  │
│  ├─ providers/              # Global React context providers
│  │  └─ theme-provider.tsx
│  │
│  ├─ middlewares/            # Application middlewares
│  │  ├─ auth.middleware.ts
│  │  └─ i18n.middleware.ts
│  │
│  └─ proxy.ts                # Network / request proxy layer
│
├─ next.config.js
├─ package.json


```
