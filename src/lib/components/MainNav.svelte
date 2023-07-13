<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen } from '$lib/assets/js/store';
	import NavItem from './NavItem.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	let i = 0;
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<ul>
		{#each navItems as page, i}
			<NavItem href={page.route}>
				<b class="nav-index">{i + 1}. </b>{page.title}
			</NavItem>
		{/each}
	</ul>
	<HamburgerMenuButton closeOnly="true" />
</nav>
