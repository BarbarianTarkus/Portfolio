<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';
	import Github from './svg/github.svelte';
	import Linkedin from './svg/linkedin.svelte';
	import RSS from './svg/rss.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="api/rss.xml">
					<RSS />
				</a>
			</li>
			<li>
				<a href="https://github.com/BarbarianTarkus/svelte-blog">
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
</footer>
