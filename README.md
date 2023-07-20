## GitHub Pages




According to the SvelteKit Docs:
[SvelteKit SSG GitHub Pages](https://kit.svelte.dev/docs/adapter-static#github-pages)


```js

/// file: svelte.config.js

import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};
```


* Importing for URL mapping on our components or a layout:

```js
/// file: any component.svelte or layout.svelte
<script>
...
	import { base } from "$app/paths"; // Import this on general layout or every page that has
                                    // '<a>': anchor element with attribute href 
...
</script>

//Example of how to call the import
<a href="{base}/about">
	<button class="blog-button"> About Me! </button>
</a>
```


* Also I use the deploying configuration used on the Docs



```yml
/// file .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: 'main'

jobs:
  build_site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      # If you're using pnpm, add this step then change the commands and cache key below to use `pnpm`
      # - name: Install pnpm
      #   uses: pnpm/action-setup@v2
      #   with:
      #     version: 8

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: build
        env:
          BASE_PATH: '/your-repo-name'
        run: |
          npm run build
          touch build/.nojekyll

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v1
        with:
          # this should match the `pages` option in your adapter-static options
          path: 'build/'

  deploy:
    needs: build_site
    runs-on: ubuntu-latest

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v1
```
