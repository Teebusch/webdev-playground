<script context="module">
  import { base } from '$app/paths';

  export async function load({ page, fetch, session, context }) {
    const url = `${base}/blog/posts.json`;
    const res = await fetch(url);

    if(res.ok) {
      return { 
        props: { 
          posts: await res.json() 
        }
      };
    } else {
      return { 
        props: { 
          posts: [] 
        }
      };
    }
  }
</script>


<script>
  import Greeting from '$lib/Greeting.svelte'
  import BlogSummary from '$lib/BlogSummary.svelte'

  import { base, assets } from '$app/paths';

  console.log( "hello", assets )

  export let posts = [];
</script>


<svelte:head>
	<title>Welcome</title>
</svelte:head>

<Greeting />
<BlogSummary { posts } />