<script>
	import DecoratorLine from '$lib/DecoratorLine.svelte';
	import Flower from '$lib/Flower.svelte';
	import CornerOrnamentContainer from '$lib/CornerOrnamentContainer.svelte';
</script>

<section
	class="relative flex min-h-[calc(100vh-61px)] flex-col items-center justify-center overflow-hidden px-6"
>
	<div class="pointer-events-none absolute inset-0" />

	<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
		<Flower />
	</div>

	<div class="pointer-events-none absolute inset-6">
		<CornerOrnamentContainer />
	</div>

	<div class="relative z-10 max-w-4xl text-center">
		<p class="font-mono-bold mb-10 text-[15px] tracking-[0.35em] text-primary uppercase">
			Computer Science · Class of 2026
		</p>

		<h1 class="mb-10 text-[clamp(4rem,12vw,8.5rem)] leading-[0.88] tracking-tight">
			<span class="block text-foreground">Tobias</span>
			<span class="block text-primary">Neuhold</span>
		</h1>

		<div class="my-8 flex justify-center">
			<DecoratorLine />
		</div>

		<p
			class="text-primay-foreground mb-14 font-mono text-[11px] tracking-[0.22em] uppercase md:text-xs"
		>
			Systems &nbsp;·&nbsp; Machine Learning &nbsp;·&nbsp; Language Design
		</p>

		<button
			class="group font-mono-bold inline-flex items-center gap-3 border border-primary/40 px-18 py-3.5 text-[15px] tracking-[0.22em] text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
		>
			View Projects
		</button>
	</div>

	<div
		class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/40"
	>
		<span class="font-mono text-[9px] tracking-[0.35em] uppercase">Scroll</span>
		<div class="h-8 w-px bg-current" />
	</div>
</section>
