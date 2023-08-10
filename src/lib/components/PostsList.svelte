<script>
	import { base } from "$app/paths";
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<article>
			<li>
				<a href="{base}/blog/{post.slug}">
					<h2>
						{post.title}
					</h2>
					<img
						class="cover-image-blog"
						src={base}{post.coverImage}
						alt=""
					/>
				</a>
				<p>{post.excerpt}</p>
			</li>
		</article>
	{/each}
</ul>

<style lang="scss">
	.posts-list {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 32px 32px;
		border: 1px solid #880606;
	}
	h2 {
		font-size: 1.5rem;
		margin: 1rem;
	}
	li {
		border: 1px solid #ccc;
		border-radius: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.cover-image-blog {
		border-radius: 1rem;
		height: 200px;
		width: 200px;
	}
</style>
