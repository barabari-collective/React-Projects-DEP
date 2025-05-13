# React State and Props Demo

This project demonstrates the fundamental concepts of React state management and props through interactive components. It's built using React + TypeScript + Vite.

![image](https://github.com/user-attachments/assets/cfa46f09-e08f-4cbe-a260-572581f23481)

## Project Overview

This interactive demo showcases how React state and props work together through two main components:

### Button Component

A customizable button that demonstrates prop passing and state management:

- Customizable text content
- Adjustable background color
- Configurable border radius
- Real-time updates through form controls

### Card Component

An interactive card component that demonstrates state management with:

- Title, image, and description props
- Like counter functionality
- Customizable image display options
- Responsive design

## Features

- Real-time component customization
- Interactive form controls
- State management demonstration
- TypeScript type safety
- Modern React practices

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Component Structure

### Button Component

```typescript
interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  borderRadius: number;
}
```

### Card Component

```typescript
interface CardProps {
  image: string;
  title: string;
  description: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}
```

## Development

This project uses:

- React for UI components
- TypeScript for type safety
- Vite for fast development and building
- CSS for styling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
