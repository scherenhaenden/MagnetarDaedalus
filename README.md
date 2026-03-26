# MagnetarDaedalus

## Project Overview

MagnetarDaedalus is a modern web application built using the [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6. It serves as a starting point and foundational architecture for developing a scalable, component-driven frontend experience.

This application is designed using Angular's latest features, taking advantage of standalone components, the newest routing features, and reactive paradigms provided by RxJS.

## Tech Stack

- **Framework:** [Angular 19](https://angular.dev)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS
- **Testing:** [Jasmine](https://jasmine.github.io/) & [Karma](https://karma-runner.github.io/)
- **Build Tool:** Angular CLI / Webpack

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://github.com/angular/angular-cli) (`npm install -g @angular/cli`)

## Getting Started

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd magnetar-daedalus
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start a local development server:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Development & Code Scaffolding

Angular CLI includes powerful code scaffolding tools to help you build out the application quickly.

To generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `services`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building for Production

To build the project for production, run:

```bash
ng build
```

This will compile your project and store the optimized build artifacts in the `dist/` directory. The production build minimizes your application's bundle sizes for optimal performance and speed.

## Testing

### Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner and Jasmine, use the following command:

```bash
ng test
```

This will run all `.spec.ts` files across the project and launch a browser to display the test results.

### End-to-End (e2e) Tests

Angular CLI does not come with an end-to-end testing framework configured by default. You can integrate tools like [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/) for your e2e testing needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
