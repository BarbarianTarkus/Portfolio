<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';
	import Github from './svg/github.svelte';
	import Linkedin from './svg/linkedin.svelte';
	import RSS from './svg/rss.svelte';
	import { base } from "$app/paths";
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="{base}/api/rss.xml">
					<RSS />
				</a>
			</li>
			<li>
				<a href="https://github.com/BarbarianTarkus">
					<Github />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/ricardverdclar/">
					<Linkedin />
				</a>
			</li>
		</ul>
	</nav>

	<!-- <p>&copy;{new Date().getFullYear()} {siteAuthor}</p> -->
</footer>

<style lang="scss">
	p {
		text-align: center;
	}
</style>
