<script>
	import MainNav from './MainNav.svelte'
	import { siteAuthor } from '$lib/config'
	import Github from './svg/github.svelte'
	import Linkedin from './svg/linkedin.svelte';
	import RSS from './svg/rss.svelte';
</script>

<footer>
	<nav>
		<ul>
		  <li>
			<a href="#">
				<RSS />
			</a>
		  </li>
		  <li>
			<a href="#">
			  <Github />
			</a>
		  </li>
		  <li>
			<a href="#">
			  <Linkedin />
		  </li>
		  
		</ul>
	  </nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>


<style lang="scss">


	p {
		text-align: center;
	}
</style>