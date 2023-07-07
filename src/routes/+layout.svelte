<!-- +layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte';
    //import '$lib/styles/style.css'
    import '$lib/assets/scss/global.scss'
    
    import { fade } from 'svelte/transition'
    import { preloadCode, preloadData } from '$app/navigation'


    export let data
</script>
    
<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<Footer />
<!-- ...HTML here -->