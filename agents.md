# Repository guide
 
## Commands
 
- Use Yarn as the package manager for dependency installation and project scripts; do not substitute npm or pnpm.
- Use Vite for development and production builds.
- The production build must bundle the application into a single, self-contained HTML file. Configure and verify the Vite build accordingly; do not assume the default Vite output meets this requirement.
- Use the project's ESLint configuration to lint changes. Fix lint errors rather than suppressing or bypassing rules.
- Follow the repository's formatting configuration strictly. Format changed files and do not bypass formatting rules.
- Before running a command, check the project scripts and configuration for the correct command rather than guessing script names.
 
## Project layout

Use a feature-oriented structure for the React application. Keep shared application setup and reusable code separate from feature-specific code, and avoid creating empty or unnecessary directories.

```text
.
├── src/
│   ├── app/                # App shell, routing, and top-level providers
│   ├── assets/             # Imported images, fonts, and other assets
│   ├── components/
│   │   └── ui/             # Reusable, feature-independent UI components
│   ├── features/
│   │   └── <feature>/      # Feature components, hooks, API, types, and tests/
│   ├── hooks/              # Shared React hooks
│   ├── lib/                # Shared utilities and integrations
│   ├── styles/             # Global styles, theme, and design tokens
│   ├── App.tsx             # Root React component
│   └── main.tsx            # Browser entry point
├── index.html              # Vite HTML entry point
├── vite.config.ts
├── eslint.config.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

- Keep feature-specific components and logic inside that feature's directory; promote code to shared folders only when it is genuinely reused.
- Keep tests in a dedicated `tests/` subdirectory within the feature or code area they cover (for example, `src/features/profile/tests/ProfileCard.test.tsx`). Do not put tests beside the application source files or in one repository-wide test directory.
- Import static assets from `src/assets/` so Vite can inline them into the single-file production build; do not add files to a Vite `public/` directory.
- Keep Vite, TypeScript, ESLint, and package-manager configuration at the repository root.

## Website Design Guidelines

### Design Philosophy
Build polished, modern, production-quality interfaces. Prioritize clarity, consistency, usability, and visual hierarchy over decoration.

The interface should feel like a carefully designed commercial SaaS product, not a generic AI-generated dashboard.

### Visual Design
- Use a consistent 4px or 8px spacing system.
- Establish a clear typography hierarchy with defined sizes, weights, and line heights.
- Use a restrained color palette with semantic colors for success, warning, error, and information.
- Maintain consistent border radii, shadows, borders, and component dimensions.
- Use whitespace to establish hierarchy without wasting screen space.
- Avoid excessive gradients, glassmorphism, oversized cards, and unnecessary decorative elements.

### Layout
- Use responsive grid and flex layouts.
- Align components consistently.
- Prefer information-dense but readable layouts for desktop applications.
- Use consistent navigation and page structures.
- Avoid horizontal scrolling except where appropriate for data tables.

### Components
- Build reusable components with consistent variants and interaction states.
- Every interactive element must support hover, focus, disabled, and loading states where applicable.
- Forms must have clear labels, validation, and error feedback.
- Tables should support appropriate sorting, filtering, and empty states.
- Use established interaction patterns instead of inventing unconventional controls.

### Accessibility
- Target WCAG 2.2 AA.
- Support keyboard navigation and visible focus indicators.
- Use semantic HTML.
- Ensure sufficient text and interface contrast.
- Respect reduced-motion preferences.

### Interaction Design
- Provide immediate feedback for user actions.
- Use subtle animations only when they communicate state or improve comprehension.
- Avoid unnecessary modals and interruptions.
- Preserve user input during errors.
- Make destructive actions clear and appropriately confirmable.

### Agent Workflow
1. Review these guidelines before designing a page.
2. Identify the page's primary user goal.
3. Establish the information hierarchy and layout.
4. Reuse existing design tokens and components.
5. Implement responsive behavior and interaction states.
6. Validate the result visually at desktop and mobile sizes.
7. Check accessibility and consistency before declaring completion.

### Reference Systems
- IBM Carbon: https://carbondesignsystem.com/
- Atlassian Design: https://atlassian.design/
- Nielsen Norman Group: https://www.nngroup.com/
- shadcn/ui: https://ui.shadcn.com/

Do not blindly copy reference websites. Extract their underlying principles and apply them consistently to the application's requirements.
 

## Coding conventions
 
- Use TypeScript and `.tsx` for React components; avoid `any` and model component props, state, and API data with explicit types.
- Write function components and use React hooks for stateful behavior. Call hooks only at the top level of components or custom hooks.
- Use PascalCase for component names and component files, and `use`-prefixed camelCase names for custom hooks. Keep a component's filename aligned with its exported component.
- Prefer named exports for application components and utilities. Keep default exports for entry points or integrations that require them.
- Keep components focused. Extract a component or custom hook when it improves reuse, readability, or separation of responsibility; avoid premature abstractions.
- Keep feature-specific UI, state, and data-access logic in that feature's directory. Keep shared components independent of feature-specific business logic.
- Avoid duplicating derived state; calculate values from existing props or state where practical. Use effects to synchronize with external systems, not to compute values that can be derived during render.
- Give rendered collections stable, data-based keys. Do not use array indexes as keys when items can be reordered, inserted, or removed.
- Handle loading, empty, and error states in asynchronous UI, and clean up subscriptions, timers, and other external resources when their effects end.
- Use semantic HTML and accessible names for controls; prefer native elements over custom interactive elements when possible.
- Follow the existing styling approach and design tokens. Do not introduce a new styling library or convention without a clear need.
- Add comments only when they clarify non-obvious intent; keep code and names self-explanatory where possible.
 
## Verification
 
- Create or update tests for every task; tests are required, not optional.
- Run the relevant tests and wait for them to finish. A task is not complete until the tests pass.
- Also run the applicable ESLint, formatting, and Vite production-build checks for the changes. Verify that the production build produces a single HTML file.
- If a required check cannot be run or fails, report that clearly; do not mark the task complete.

