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
  let biography = ["Childhood", "Language", "Brain", "PhD", "Norway", "Today"]
</script>


<svelte:head>
	<title>Welcome</title>
</svelte:head>

<section class="w-screen overflow-hidden flex flex-col 2xl:flex-row items-start 2xl:items-center px-10 pt-32 pb-20 text-gray-800 antialiased leading-none">
  <h1 class="text-xxl tracking-wider ">Hello!</h1>
  
  <h1 class="text-8xl tracking-tight 2xl:leading-tight max-w-screen-lg">
      <span class="font-light">I am</span> <span class="font-extrabold text-8xl leading-tight">Tobias</span> <span class="font-extrabold text-8xl leading-tight tracking-wider">Busch</span>
  </h1>
</section>


<section class="sticky scroll-snap-start scroll-snap-y max-w-screen-lg mx-auto">
  
  <div class="relative">
    <p class="py-1 text-gray-600 antialiased max-w-prose text-3xl leading-loose tracking-wide">
      This is my <span class="font-serif italic text-6xl mx-2 text-gray-900">personal</span> website. It's not much but it's honest work.
      I am a fugit et numquam consequatur optio amet dolores. Ducimus sapiente quaerat doloribus aliquid beatae voluptatem earum tempore.
    </p>

    <aside class="leading-tight 2xl:absolute 2xl:-right-36 2xl:top-3 2xl:w-24 2xl:flex-col flex flex-row gap-1">
      <p class="text-gray-300">You can also find me on</p>
      <div class="text-gray-600 flex flex-row 2xl:flex-col gap-1">
        <span class="hover:text-gray-900 hover:bg-gray-100 duration-200 hover:scale-x-100 hover:px-2 transform"><a href="">Github,</a></span>
        <span class="hover:text-gray-900 hover:bg-gray-100 duration-200 hover:scale-x-100 hover:px-2 transform"><a href="">Instagram,</a></span>
        <span class="hover:text-gray-900 hover:bg-gray-100 duration-200 hover:scale-x-100 hover:px-2 transform"><a href="">Twitter,</a></span>
        <span class="text-gray-300">and</span>
        <span class="hover:text-gray-900 hover:bg-gray-100 duration-200 hover:scale-x-100 hover:px-2 transform"><a href="">LinkedIn.</a></span>
      </div>
    </aside>

  </div>
</section> 

<section id="bio" class="max-w-screen my-20 py-20 scroll-snap-start">
  <div class="flex flex-row max-w-screen-lg mx-auto gap-6">
    <h2 class="text-6xl text-gray-800 flex-shrink-0">
      Who am I?
    </h2>
    <p class="text-gray-400 text-4xl self-end">A timeline of the events so far &hellip;</p>
  </div>

  <ul class="flex flex-row justify-around my-10 shadow-inner cursor-pointer">
    {#each biography as bio}
    <li class="h-48 flex-1 bg-gray-200 flex items-center justify-center bg-local filter grayscale" style="background-image: url(https://source.unsplash.com/random/300x300/?{bio})">
      <span class="text-4xl text-white bg-blend-multiply opacity-80 rounded-md px-2 py-1">
        { bio }
      </span>  
    </li>
    {/each}
  </ul>

  <div class="text-gray800 leading-relaxed max-w-screen-lg mx-auto flex flex-col gap-4">
  <p class="max-w-prose">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ex libero incidunt amet, 
    eligendi adipisci deserunt iure doloribus nemo ad minima enim natus veritatis reiciendis. 
    Unde eos nihil doloribus in reprehenderit sint nam aliquam inventore maxime optio aperiam 
    obcaecati, excepturi autem magnam dignissimos nesciunt quos fugiat? Corporis ab labore 
    sapiente reprehenderit, alias impedit est obcaecati, illum quis harum facere.
  </p>

  <button class="text-lg self-start hover:bg-gray-100 p-1 rounded-md">Download CV</button>
  </div>
</section>


<section id="blog" class="my-10 py-10 mx-auto w-full max-w-screen-lg min-h-screen scroll-snap-start">
  
  <div class="flex gap-8">
    <div class="grid grid-cols-1 grid-rows-auto w-1/2 place-content-start">

      <h2 class="text-7xl text-gray-800 leading-loose tracking-wide inline">Blog</h2>

      <p class="mb-10 text-2xl leading-loose w-2/3">
        I write about 
        <button class="bg-gray-100 hover:bg-green-200 duration-200 rounded-lg px-1 mx-1 my-1">R</button>, 
        <button class="bg-gray-100 hover:bg-green-200 duration-200 rounded-lg px-1 mx-1 my-1">JavaScript</button>, 
        <button class="bg-gray-100 hover:bg-green-200 duration-200 rounded-lg px-1 mx-1 my-1">Data Visualisation</button>, 
        and 
        <button class="bg-gray-100 hover:bg-green-200 duration-200 rounded-lg px-1 mx-1 my-1">other stuff</button>.
      </p>

      {#each posts as post}
      <article class="group py-10 pr-6 min-h-full" >
          <a 
            class="text-4xl leading-relaxed font-bold text-gray-900 group-hover:py-1 group-hover:bg-gray-100 transform duration-200"
            rel="prefetch" 
            href="./blog/{ post.slug }">
              { post.title }
          </a>
          <p class="text-gray-400 scale-x-0 opacity-0 cursor-pointer group-hover:opacity-100 origin-top group-hover:scale-x-100 group-hover:translate-y-1 transform duration-200 ease-out">
            { post.slug } written on { post.date }
          </p>
        </article>
      {/each}

    </div>

    <div class="w-1/2 col-span-1">
        <img src="https://source.unsplash.com/random/500x600/" alt="" class="rounded-md my-8 sticky top-1/3 shadow-lg">
    </div>
  </div>
</section>

<section id="contact" class="bg-gray-100 w-screen min-h-screen mt-20 pt-20">
  <div class="grid max-w-screen-lg mx-auto py-36">  
    <h2 class="text-7xl text-gray-800">
      Get in Touch!
    </h2>
  </div>
</section>