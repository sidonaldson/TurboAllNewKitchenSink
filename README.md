# TODO

[x] - Add TODO list to Readme  
[ ] - Add AirBnB eslint config  
[ ] - Add Axe a11y testing  
[ ] - Tailwind should build dynamic classes in [Storybook (docs)](http://localhost:6006/?path=/story/components-gradienttext--default-story)  
[ ] - Next thing  
[ ] - Next thing  

# Turborepo kitchen sink starter

This is an official starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

## Troubleshooting

Build fails, missing style.css file OR permission not allowed.
Cause - folders are protected
Solution: `sudo chmod -R 777 /path/to/root/project/folder`
