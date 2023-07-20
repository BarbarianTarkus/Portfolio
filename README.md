## GitHub Pages

**This Branch is the implementation of the SvelteKit blog but using Github Pages as a Hosting.**


Problematics:
* Without changing the 'master' branch implementation GitHub pages doensn't recognize de routes, and Jekyll builts the page 
with the ./Readme.md as the home page situated on the route 'https://barbariantarkus.github.io/svelte-blog/' and if we manage to navigate to /about route for example and I click the 'Home' button
I will be redirected to '/' that is 'https://barbariantarkus.github.io/'(and it has to be 'https://barbariantarkus.github.io/svelte-blog/') and we will have an "ERROR NOT FOUND"



According to the **SvelteKit Docs** this is the way to publish our project to GitHub Pages:
[SvelteKit SSG GitHub Pages](https://kit.svelte.dev/docs/adapter-static#github-pages)

1. Edit 'svelte.config.js'

	svelte.config.js
	```js
	
	
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


2. Import 'base' for URL mapping on our components or a layout:
  
	any component.svelte or layout.svelte
	```js
	
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

3. Also I use the deploying configuration used on the Docs
	.github/workflows/deploy.yml
	```yml
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
