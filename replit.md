# Overview

MegaToolsX is a comprehensive social media tools platform built as a full-stack web application. The platform provides 23+ free tools for content creators, including downloaders for major social media platforms (YouTube, Instagram, TikTok, etc.), content generators (titles, hashtags), and analytics tools. The application features a modern, responsive design with a focus on user experience and unlimited usage for all tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **UI Library**: Radix UI components with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming, including light/dark mode support
- **Routing**: Wouter for client-side routing with a simple two-page structure (Home and Tool pages)
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation schemas for type-safe form validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API with dedicated endpoints for each tool category (downloaders, generators, analyzers)
- **Development**: Hot module replacement via Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request/response logging with performance metrics

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management and tool result storage with JSON fields for flexible data structures
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Development Storage**: In-memory storage implementation for development/testing scenarios

## Component Architecture
- **Design System**: Comprehensive UI component library based on Radix primitives
- **Layout Components**: Responsive header, footer, and mobile navigation with hamburger menu
- **Tool Components**: Modular tool cards with specialized components for downloaders, generators, and analyzers
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts and touch-friendly interactions

## External Dependencies

- **Database**: Neon Database (PostgreSQL) as the primary database provider
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS for utility-first styling with PostCSS processing
- **Icons**: Lucide React for consistent iconography, Font Awesome for brand icons
- **Development Tools**: ESBuild for production builds, TSX for development server
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **Date Handling**: date-fns for date manipulation and formatting
- **Validation**: Zod for runtime type validation and schema definition