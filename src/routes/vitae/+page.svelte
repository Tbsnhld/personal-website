<script>
	import DecoratorLine from '$lib/DecoratorLine.svelte';
	import Flower from '$lib/Flower.svelte';
	import CornerOrnamentContainer from '$lib/CornerOrnamentContainer.svelte';
</script>

<section
	class="relative flex min-h-[calc(100vh-61px)] flex-col items-center justify-center overflow-hidden px-6"
> 
  <div class="w-full flex flex-col items-center">
        <a class="mb-8 font-bodoniamoda text-[8vw] text-main-yellow/55 lg:text-[4vw] 2xl:text-[15vh]">
         T 
        </a>
      </div>
	<div class="pointer-events-none absolute inset-0" />

	<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
		<Flower />
	</div>

	<div class="pointer-events-none absolute inset-6">
		<CornerOrnamentContainer />
	</div>

</section>
