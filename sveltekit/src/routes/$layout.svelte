
<script>
	import "../app.postcss";
  import "./../styles/prism.css";

  let open = true;
</script>

<div class="bg-grey-50">
  
  <header class="text-2xl text-gray-900 w-full group">
    <a href="/" class="z-30 fixed top-6 left-6 filter grayscale transform group-hover:scale-150 group-hover:filter transition duration-300">🍄</a>

    <div class="z-10 absolute h-1/4">
      <nav class="sticky top-6 flex flex-row gap-7 justify-around ml-20">
        <a href="/"  class="font-bold">tobiasbusch.xyz</a>
        <!-- <a href="/#bio"  class="">Bio</a>
        <a href="/#blog"  class="">Blog</a>
        <a href="/#contact"  class="">Contact</a> -->
      </nav>
    </div>

  </header>
  
  <main class="relative bg-grey-50 max-w-screen min-h-screen z-0">
    <slot />
  </main>
</div>