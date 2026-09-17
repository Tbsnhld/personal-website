<script lang="ts">
import CardOrnament from '$lib/CardOrnament.svelte'
let { projectTitle = "Default", projectYear, projectTech= ['a', 'b', 'c'], projectDescription="", repoUrl="", liveUrl="" } = $props();
</script>

<figure>
  <article class="border border-primary/20 bg-card flex flex-col gap-0 hover:border-primary/48 transition-all duration-300 group relative overflow-hidden">
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background:
        "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(200,168,75,0.06) 0%, transparent 70%)",
      }}
    />

    <div class="px-6 pt-7 pb-6 flex flex-col gap-4 flex-1 relative">
      <CardOrnament />

      <div class="flex items-start justify-between gap-3">
        <h3
          class="text-2xl leading-tight text-foreground group-hover:text-primary transition-colors duration-300"
        >
          {projectTitle}
        </h3>
        <span class="font-mono text-xs text-muted-foreground shrink-0 mt-1.5 tracking-[0.1em]">
          {projectYear}
        </span>
      </div>

      <p class="text-md text-foreground/65 leading-[1.75] flex-1">
        {projectDescription}
      </p>

      <div class="flex flex-wrap gap-1.5 pt-1">
        {#each projectTech as tech}
          <span
            class="font-mono text-xs tracking-[0.12em] px-2 py-1 border border-primary/22 text-muted-foreground"
          >
            {tech}
          </span>
        {/each}

      </div>
    </div>

    <div class="border-t border-primary/15 px-6 py-3.5 flex items-center gap-5 relative">
      <a
        href={repoUrl}
        class="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors"
      >
        Source
      </a>
      
      {#if liveUrl != ""}
        <a
          href={liveUrl}
          class="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors"
        >
          Live
        </a>
      {/if}
    </div>
  </article>
</figure>
