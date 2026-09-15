<script >
import ProjectCard from '$lib/ProjectCard.svelte'
import DecoratorLine from '$lib/DecoratorLine.svelte'
import CornerOrnamentContainer from '$lib/CornerOrnamentContainer.svelte';

import {projects} from '$lib/data/projects.ts';
</script>


<div class="relative min-h-screen py-24 px-6 md:px-12">
  <div class="pointer-events-none absolute inset-0">
    <CornerOrnamentContainer />
  </div>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-24">
      <p class="text-md tracking-[0.35em] uppercase text-primary mb-5">Portfolio</p>
      <h1
        class="font-bodoniamoda text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] text-foreground mb-8"
      >
        Projects
      </h1>
      <div class="flex justify-center">
        <DecoratorLine class="max-w-sm" />
      </div>
      <p class="mt-5 text-sm text-foreground max-w-lg mx-auto leading-relaxed">
        A selection of systems, tools, and experiments built across the last years of study. 
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each projects as project,i}
        <div key=i>
          <ProjectCard 
            projectTitle={project.title}
            projectYear={project.year}
            projectTech={project.tech }
            projectDescription={project.description }
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      {/each}
    </div>
  </div>
</div>
