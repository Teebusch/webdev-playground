<script>
  let biography = ["Childhood", "Language", "Brain", "PhD", "Norway", "Today"]
</script>

<section id="bio" class="max-w-screen my-20 py-20 scroll-snap-start">
  <div class="flex flex-wrap max-w-screen-lg mx-auto gap-6">
    <h2 class="text-6xl text-gray-800 flex-shrink-0">
      Who am I?
    </h2>
    <p class="text-gray-400 text-4xl self-end">A timeline of the events so far &hellip;</p>
  </div>

  <ul class="flex flex-wrap justify-around my-10 cursor-pointer">
    {#each biography as bio}
    <li 
      class="flex flex-1 w-3 h-10 items-center justify-center bg-local filter saturate-0 shadow" 
      style="background-image: url(https://source.unsplash.com/random/300x300/?{bio})"
    >
      <span class="text-xl text-white rounded-md px-2 py-1">
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