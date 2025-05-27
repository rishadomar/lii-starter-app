# Livingston Starter App

A comprehensive React TypeScript starter application built with Vite, featuring enterprise-grade authentication, state management, and a modern development setup.

## 🚀 Quick Start

### Prerequisites

-   Node.js 22.11.0 or higher
-   npm or yarn package manager

### Installation

1. **Use this template** (if this is a template repository) or clone:

    ```bash
    git clone xxx
    cd starter-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    ```bash
    cp .env.local.example .env.local
    # Edit .env.local with your configuration
    ```

4. **Start development server:**

    ```bash
    npm run dev
    ```

5. **Open your browser:** http://localhost:3000

## 📦 Tech Stack

### Core Framework

-   **React 18.2.0** - Modern React with hooks and concurrent features
-   **TypeScript 5.7.2** - Type-safe development
-   **Vite 6.2.3** - Lightning-fast build tool and dev server

### UI Libraries

-   **React Bootstrap 2.10.9** - Bootstrap components for React
-   **Kendo UI for React 10.1.0** - Advanced data components (Grid, DatePicker, etc.)
-   **livingston-npm-components 2.0.30** - Custom component library
-   **FontAwesome** - Icon library

### State Management & Routing

-   **Redux Toolkit 2.6.1** - Modern Redux with RTK Query for API calls
-   **React Router 7.4.0** - Declarative routing

### Authentication

-   **Okta React SDK** - Enterprise SSO integration

### Development Tools

-   **ESLint** - Code quality and consistency
-   **MSW (Mock Service Worker)** - API mocking for development
-   **TypeScript ESLint** - TypeScript-specific linting rules

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── authentication/  # Auth-related components
│   ├── cards/           # Card components (Counter, Springboard, etc.)
│   └── ...
├── pages/               # Page components
│   ├── dashboard/       # Dashboard-specific components
│   └── ...
├── store/               # Redux store configuration
│   ├── api/            # RTK Query API slices
│   ├── reducers/       # Redux reducers
│   └── ...
├── utils/               # Utility functions and custom hooks
│   ├── hooks/          # Custom React hooks
│   └── ...
├── types/               # TypeScript type definitions
├── mocks/               # MSW mock API handlers
└── ...
```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🔧 Configuration

### Environment Variables

See .env.local.example

### Key Configuration Files

-   **`vite.config.ts`** - Vite configuration with path aliases
-   **`tsconfig.app.json`** - TypeScript configuration for the app
-   **`eslint.config.js`** - ESLint rules and plugins
-   **`src/constants.ts`** - Application constants and settings

## 🎨 UI Component Priority

When building components, use this priority order:

1. **Custom NPM Library** (`livingston-npm-components`) - Use first if available
2. **React Bootstrap** - Standard Bootstrap components
3. **Kendo UI React** - For advanced data components (grids, dropdowns, date pickers)

## 🔐 Authentication

The app supports Okta-based enterprise authentication:

-   Set `VITE_OKTA_ENABLED=true` to enable
-   Configure Okta settings in environment variables
-   Authentication routes are pre-configured (`/login/callback`, `/logout`)

## 🧪 Mock API

Development includes a complete mock API setup using MSW:

-   **Location**: `src/mocks/`
-   **Configuration**: Enabled via `VITE_USE_MOCK_API=true`
-   **Mock Data**: JSON files in `src/mocks/mockData/`
-   **Handlers**: Separate handlers for different API endpoints

## 🌐 Internationalization

Built-in support for multiple languages:

-   **Supported Languages**: English, French, Spanish
-   **Translation Hook**: `useTranslation` custom hook
-   **Storage**: User preference saved in localStorage

## 🎯 Design System Integration

The app integrates with the Livingston Design System:

-   **CSS**: Loaded from external CDN
-   **Components**: Follow design system patterns
-   **Path Aliases**: Use `@/` for clean imports

## 📱 Responsive Design

-   Mobile-first approach with React Bootstrap
-   Responsive breakpoints and utilities
-   Touch-friendly interface components

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Environment-Specific Builds

-   **Development**: Mock API enabled, dev CSS
-   **UAT/Production**: External APIs, production CSS

## 🤝 Contributing

### Code Style

-   Follow existing TypeScript patterns
-   Use ESLint and follow the configured rules
-   Prefer functional components with hooks
-   Use Redux Toolkit for state management

### Component Guidelines

-   Place reusable components in `src/components/`
-   Page-specific components go in respective page folders
-   Export components using named exports
-   Include TypeScript interfaces for props

### API Integration

-   Use RTK Query for API calls
-   Create separate API slices for different domains
-   Handle loading and error states consistently

## 📚 Key Features

### Dashboard

-   **Counter Cards**: Display key metrics
-   **Springboard Cards**: Quick navigation and actions
-   **Recent Activity**: Data tables with Kendo Grid
-   **Responsive Layout**: Works on all screen sizes

### State Management

-   **Redux Store**: Centralized state management
-   **RTK Query**: Automatic caching and background updates
-   **Toast Notifications**: Global notification system

### Development Experience

-   **Hot Module Replacement**: Instant updates during development
-   **TypeScript**: Full type safety and IntelliSense
-   **Path Aliases**: Clean import statements with `@/`
-   **Mock API**: Develop without backend dependencies

## 🆘 Troubleshooting

### Common Issues

**Port 3000 already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
```

**TypeScript errors:**

```bash
# Clear TypeScript cache
rm -rf node_modules/.tmp
npm run build
```

**Mock API not working:**

-   Ensure `VITE_USE_MOCK_API=true` in `.env.local`
-   Check MSW worker registration in browser dev tools

## 📄 License

Private - Livingston International

## 🔗 Related Resources

-   [Livingston Design System](https://dds-react-wiki-dev.livingston.com)
-   [Custom NPM Components Documentation](link-to-your-npm-docs)
-   [React Bootstrap Documentation](https://react-bootstrap.netlify.app/)
-   [Kendo UI for React](https://www.telerik.com/kendo-react-ui/)

---

**Built with ❤️ by the Livingston Development Team**
