<script>
  export let title;
  export let slug;
  export let date;
</script>

<article>
  <header>
    <h1 class="max-w-screen-md mx-auto text-8xl mb-10 mt-40 tracking-wider leading-normal text-gray-">
      { title }
    </h1>
  </header>
  
  
  <main class="max-w-screen-md mx-auto">
    <aside class="border-b-2 border-t-2 border-dashed lg:border-0 py-6 lg:py-0 lg:float-left lg:relative 
    lg:-mx-56 my-8 lg:my-2 lg:text-right lg:w-56 pr-10 pl-2 text-gray-400 flex flex-col gap-3 lg:text-sm">
      <a href="https://twitter.com/tobilottii" class="text-gray-800 font-semibold lg:text-lg">
        Tobias Busch
      </a>
      <h2 class="lg:tracking-wider">{ date }</h2>
      <p class="">
        If you enjoyed this, tweet about it or buy me a coffee!
      </p>
      <p><a href="https://twitter.com/tobilottii" class="text-gray-800">🐤☕</p>
    </aside>
    
    <div class="prose prose-pink lg:prose-xl mx-2">
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
    </div>
  </main>

</article>