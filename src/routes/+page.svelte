<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Ricardo Verduguez</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div>
  <h1 class="little-heading">Hi, my name is</h1>
  <h1 class="big-heading">Ricardo Verduguez.</h1>
  <h1 class="big-heading-faded">I'm a Software Engineer Student</h1>
  <p class="resume-text">
    Focusing on cibersecurity, but also interested in web development, 
    willing to learn new technologies and improve my skills.
  </p>
</div>



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

</style>