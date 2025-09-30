This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### 1. Організація компонентів

Компоненти розділяються за рівнем використання:

- **ui/** – дрібні, повторно використовувані примітиви (Button, Input, Slider).
- **layout/** – глобальні частини сторінки (Layout, Sidebar, Header).
- **widgets/** – великі незалежні блоки, які можуть вставлятися на різні сторінки (OrderSummary).
- **features/** – бізнес-функціонал, пов’язаний з доменом (ProductConfigurator, Checkout).
  Такий підхід дозволяє легко масштабувати й перевикористовувати елементи.

### 2. Робота з API

У масштабному проєкті доцільно мати шар **services/** або **api/** з обгортками над HTTP-клієнтом (наприклад, fetch/axios/GraphQL). Використовувати патерн "data hooks" (`useProduct`, `useCart`) для інкапсуляції логіки. Це спрощує тестування, зміну бекенду й кешування (React Query, SWR).

### 3. Масштабування сторінок та функціональності

Сторінки структуруються в **pages/** (Next.js), а бізнес-логіка та блоки — в **features/**. Нові блоки додаються у **widgets/** чи **features/** залежно від специфіки. Така модульність дозволяє додавати функціонал без великого рефакторингу.

### 4. Основні ризики фронтенду

- **Перевантаження сторінок даними** → потрібно кешування, пагінація, оптимізація API.
- **Втрата консистентності UI** → варто мати єдину дизайн-систему в `ui/`.
- **Продуктивність** (повільний рендер, великі бандли) → застосовувати кодсплітинг, lazy loading.
- **Складність стану** → використовувати зрозумілу стейт-менеджмент стратегію (React Query, Context, Zustand).
