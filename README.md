
**The branch [Pages](https://github.com/BarbarianTarkus/svelte-blog/tree/pages) is the branch related to the GitHub Pages implementation that has his own peculiarity's.**



# Svelte Kit Blog
**Made following [Josh Collinsworth](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) guide.**

**Characteristics:**
* RSS
* Markdown Preprocessing and Syntax Highllighting
* API for posts and categories

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
