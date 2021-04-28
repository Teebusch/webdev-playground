<script context="module">
  export async function load({ page, fetch, session, context }) {
    const url = '/blog/posts.json';
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
  export let posts;
  let biography = ["Childhood", "Language", "Brain", "PhD", "Norway", "Today"]
</script>


<svelte:head>
	<title>Welcome</title>
</svelte:head>

<section id="greeting" class="max-w-full min-h-full py-20">

  <div class="px-3 py-10 md:pb-20 flex flex-wrap items-start">
    <div class="text-gray-800 antialiased leading-snug md:leading-none flex flex-wrap">
      <h1 class="text-8xl lg:text-xxl tracking-wider flex-shrink-0">
        Hello!
      </h1>
      <h1 class="text-8xl leading-tight lg:pl-6 2xl:max-w-min flex-grow-1">
        <span class="tracking-tight whitespace-nowrap">I am</span>
        <span class="font-bold tracking-wider">Tobias</span>
        <span class="font-bold tracking-widest">Busch</span>
      </h1>
    </div>
  </div>
  
  <div class="w-full max-w-screen-lg mx-auto px-3">
    <p class="text-3xl leading-loose tracking-wide text-gray-600 antialiased max-w-prose my-3">
      This is my <span class="font-serif italic text-6xl mx-2 text-gray-900">personal</span> website. 
      It's not much but it's honest work. I am a fugit et numquam consequatur optio amet dolores. 
      Ducimus sapiente quaerat doloribus aliquid beatae voluptatem earum tempore.
    </p>

    <aside class="text-gray-700 leading-snug 2xl:absolute 2xl:-right-36 2xl:top-3 2xl:w-24 2xl:max-w-min">
      You can also find me on
      <a href="/" class="bg-gray-100 hover:bg-green-100 duration-200 hover:px-2">Github,</a>
      <a href="/" class="bg-gray-100 hover:bg-green-100 duration-200 hover:px-2">Instagram,</a>
      <a href="/" class="bg-gray-100 hover:bg-green-100 duration-200 hover:px-2">Twitter,</a>
      and
      <a href="/" class="bg-gray-100 hover:bg-green-100 duration-200 hover:px-2">LinkedIn.</a>
    </aside>
  </div> 

</section>
