<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Ricardo Verduguez</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<div>
	<h1 class="little-heading">Hi, my name is</h1>
	<h1 class="big-heading">Ricardo Verduguez.</h1>
	<h1 class="big-heading-faded">I'm a Software Engineer Student</h1>
	<p class="resume-text">
		Focusing on cibersecurity, but also interested in web development, willing to learn new
		technologies and improve my skills.
	</p>
</div>

<a href="/about">
	<button class="blog-button"> About Me! </button>
</a>

<style lang="scss">
	.little-heading,
	.big-heading,
	.big-heading-faded,
	.resume-text {
		font-family: sans-serif;
	}

	.little-heading {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0;
		color: var(--text-accent);
		font-family: var(--codeFont);
	}
	.big-heading {
		font-size: 4rem;
		font-weight: 700;
		margin: 0;
		color: var(--lightest-slate);
	}
	.big-heading-faded {
		font-size: 4rem;
		font-weight: 700;
		margin: 0;
		color: var(--slate);
	}
	.resume-text {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0;
		color: var(-slate);
	}

	a {
		text-decoration: none;
		.blog-button {
			background-color: transparent;
			color: var(--lightest-slate);
			border-color: var(--text-accent);
			border-radius: 0.5rem;
			padding: 1rem 1.5rem;
			font-size: 1rem;
			font-weight: 500;
			line-height: 1;
			cursor: pointer;
			transition: var(--transition);
			&:hover,
			&:focus,
			&:active {
				background-color: var(--text-accent);
				color: var(--background);
			}
			font-family: var(--codeFont);
		}
	}
</style>
