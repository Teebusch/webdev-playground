<script>
  export let title;
  export let slug;
  export let date;
</script>

<h1 class="max-w-screen-lg text-8xl my-10 tracking-wider text-gray-800 mx-2">{ title }</h1>
<h2>{ date }</h2>
<article class="center prose prose-pink lg:prose-xl mx-2">
  <slot>
    <!-- the mdsvex content will be slotted in here -->
  </slot>
</article>