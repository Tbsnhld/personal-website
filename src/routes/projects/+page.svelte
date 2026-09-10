<script >
import ProjectCard from '$lib/ProjectCard.svelte'
import DecoratorLine from '$lib/DecoratorLine.svelte'
</script>


<main class="min-h-screen py-24 px-6 md:px-12">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-24">
      <p class="font-mono text-[1.2vh] tracking-[0.35em] uppercase text-primary mb-5">Portfolio</p>
      <h1
        class="text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] text-foreground mb-8"
        style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontStyle: "italic" }}
      >
        Projects
      </h1>
      <div class="flex justify-center">
        <DecoratorLine class="max-w-sm" />
      </div>
      <p class="mt-7 text-m text-foreground max-w-lg mx-auto leading-relaxed">
        A selection of systems, tools, and experiments built across the last years of study. 
        <br>
        Each a small attempt at helping and supporting humans.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProjectCard/>
    </div>
  </div>
</main>
