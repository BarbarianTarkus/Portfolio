<script>
	export let data;
</script>

<article class="post">
	<h1>{data.title}</h1>

	<div class="meta">
		<b> Published: </b>
		{data.date}
	</div>

	<svelte:component this={data.content} />

	{#if data.categories.length}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul>
				{#each data.categories as category}
					<li>
						<a href="/blog/category/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>
