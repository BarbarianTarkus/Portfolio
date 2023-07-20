## GitHub Pages





* Importing for URL mapping on our components:

```js
<script>
...
	import { base } from "$app/paths"; // Import this on general layout or every page that has
                                    // '<a>': anchor element with attribute href 
...
</script>

<a href="{base}/about">
	<button class="blog-button"> About Me! </button>
</a>
```
