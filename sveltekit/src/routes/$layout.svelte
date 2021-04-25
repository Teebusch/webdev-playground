<script>
	import "../app.postcss";
  import "./../styles/prism.css";
</script>

<header class="sticky top-0 z-50">
  <nav class="w-full flex items-center justify-between mt-0 px-6 py-3">
    <a href=".">Home</a>
    <a href="blog">Blog</a>
    <a href="about">About</a>
  </nav>
</header>

<main class="relative mx-auto">
  <slot />
</main>
