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
          posts: [{slug: "bla", title: "bla", date: "bla"}] 
        }
      };
    }
  }
</script>

<script>
  export let posts = [];
</script>

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

    <div class="w-1/2 col-span-1" style="">
        <img src="https://source.unsplash.com/random/500x600/" alt="" class="rounded-md my-8 sticky top-1/3 shadow-lg">
    </div>
  </div>
</section>