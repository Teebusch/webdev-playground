<script>
	import "../app.postcss";
  import "./../styles/prism.css";
</script>

<div class="bg-grey-50">
  <header class="fixed top-0 z-10">
    <nav class="relative w-full flex items-start px-6 py-6">
      <a href="/" class="text-2xl text-pink-500 filter grayscale transform hover:scale-150 hover:filter transition duration-300">🍄</a>
    </nav>
  </header>
  
  <main class="relative grid content-start justify-center x-auto bg-grey-50 min-w-full min-h-screen z-0">
    <slot />
  </main>
</div>
-