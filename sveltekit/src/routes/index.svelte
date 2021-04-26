<script context="module">

export async function load({ page, fetch, session, context }) {
  const url = '/blog/posts.json';
  const res = await fetch(url);

  if(res.ok) {
    return { props: { posts: await res.json() }};
  } else {
    return { props: { posts: [] }};
  }
}

</script>

<script>
  export let posts;
</script>


<svelte:head>
	<title>Welcome</title>
</svelte:head>

<div class="scroll-snap-y">
  <section class="sticky min-h-screen max-w-screen-lg mx-auto scroll-snap-start">
    <h1 class="sticky text-xxl tracking-wider text-gray-800 mt-16">
      Hello!
    </h1>
    
    <div class="relative">
      <p class="py-1 text-gray-700 max-w-prose text-3xl leading-loose tracking-wide">
        This is my <strong class="font-bold text-black">personal</strong> website. It's not much but it's honest work.
        Lorem ipsum dolor sit, fugit et numquam consequatur optio amet dolores. Ducimus sapiente quaerat doloribus aliquid beatae voluptatem earum tempore.
      </p>
        <ul class="text-gray-500 leading-tight absolute -right-16 top-3">
          <li class="hover:text-gray-900 hover:bg-gray-100 duration-200"><a href="">Instagram</a></li>
          <li class="hover:text-gray-900 hover:bg-gray-100 duration-200"><a href="">Twitter</a></li>
          <li class="hover:text-gray-900 hover:bg-gray-100 duration-200"><a href="">LinkedIn</a></li>
        </ul>
    </div>
  </section> 
  
  <section class="grid grid-flow-col grid-cols-2 grid-rows-auto py-8 mx-auto w-full max-w-screen-lg min-h-screen scroll-snap-start">
      {#each posts as post}
      <article class="group leading-loose py-6 pr-6">
        <a 
          class="text-4xl font-bold text-gray-900 group-hover:px-4 group-hover:py-1 group-hover:bg-gray-100 transform duration-200"
          rel="prefetch" 
          href="./blog/{ post.slug }">
            { post.title }
          </a>
          <p class="text-gray-400 scale-x-0 opacity-0 group-hover:opacity-100 origin-top group-hover:scale-x-100 group-hover:translate-y-1 transform duration-200 ease-out">
            { post.slug } written on { post.date }
          </p>
        </article>
      {/each}
  </section>
</div>
