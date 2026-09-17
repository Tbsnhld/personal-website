<script>
	import DecoratorLine from '$lib/DecoratorLine.svelte';
	import CornerOrnamentContainer from '$lib/CornerOrnamentContainer.svelte';
</script>

<section
	class="relative flex h-full flex-col items-center justify-center overflow-hidden px-6"
>

	<div class="pointer-events-none absolute inset-0">
		<CornerOrnamentContainer />
	</div>

	<div class="relative z-10 max-w-4xl text-center">
		<p class="font-lora lg:text-sm text-xs tracking-[0.35em] text-foreground uppercase">
			Stud. M.Sc. Computer Science 
		</p>
		<p class="font-lora mb-10 lg:text-sm text-sm tracking-[0.35em] text-primary uppercase">
		 Universität Kassel
		</p>

		<h1 class="mb-10 text-8xl md:text-[clamp(6rem,12vw,12rem)] leading-[0.88] tracking-tight font-bodoniamoda">
			<span class="block text-foreground">Tobias</span>
			<span class="block text-primary">Neuhold</span>
		</h1>

		<div class="my-8 flex justify-center">
			<DecoratorLine />
		</div>

		<p class="text-foreground mb-14 font-lora text-sm tracking-[0.22em] uppercase md:text-base">
			Data &nbsp;·&nbsp; Privacy &nbsp;·&nbsp; Design 
		</p>
    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center">
      <a
        class="backdrop-blur-sm justify-center font-lora font-bold inline-flex items-center gap-3 border border-primary/40 px-18 py-3.5 text-sm tracking-[0.22em] text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        href="projects"
      >
        View Projects
      </a>
      <a
        class="backdrop-blur-sm justify-center font-lora font-bold inline-flex items-center gap-3 border border-primary/40 px-18 py-3.5 text-sm tracking-[0.22em] text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        href="/vitae"
      >
        Vitae
      </a>
      <a
        class="backdrop-blur-sm justify-center font-lora font-bold inline-flex items-center gap-3 border border-primary/40 px-18 py-3.5 text-sm tracking-[0.22em] text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        href="/about"
      >
        About
      </a>
    </div>
	</div>

</section>
