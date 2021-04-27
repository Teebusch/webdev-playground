<script>
	import "../app.postcss";
  import "./../styles/prism.css";
</script>

<div class="bg-grey-50">
  <header class="fixed top-0 z-20">
    <nav class="relative w-full flex items-start px-6 py-6 group">
      <a href="/" class="text-2xl filter grayscale transform group-hover:scale-150 group-hover:filter transition duration-300">🍄</a>
      <a href="/"  class="mx-6 text-gray-900 text-2xl font-extrabold">mywebsite.xyz</a>
      <a href="/#bio"  class="mx-6 text-gray-900 text-2xl font-extrabold">Bio</a>
      <a href="/#blog"  class="mx-6 text-gray-900 text-2xl font-extrabold">Blog</a>
      <a href="/#contact"  class="mx-6 text-gray-900 text-2xl font-extrabold">Contact</a>
    </nav>
  </header>
  
  <main class="relative grid content-start justify-center bg-grey-50 min-w-full min-h-screen z-10">
    <slot />
  </main>
</div>
-