<script>
  import SectionHeader from './SectionHeader.svelte';
  import TimelineNode from './TimeLineNode.svelte';
  let {EDUCATION} = $props();
</script>
<section>
  <SectionHeader label="Formal" title="Education" />
  <div class="relative border-l border-primary/25 ml-[6px] space-y-10">
    {#each EDUCATION as entry,i}
      <div key={i} class="relative pl-8">
        <TimelineNode />
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <h2
            class="text-xl text-foreground leading-tight"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
          >
            {entry.degree}
          </h2>
          <span class="font-mono text-md tracking-[0.12em] text-muted-foreground shrink-0">
            {entry.period}
          </span>
        </div>
        <p class="font-mono text-sm tracking-[0.12em] text-primary mb-1">
          {entry.institution} · {entry.location}
        </p>
        <p class="text-xs text-muted-foreground mb-3 font-mono tracking-[0.1em]">{entry.gpa}</p>
        <ul class="space-y-1.5">
        {#each entry.notes as note,j}
            <li key={j} class="text-md text-foreground/65 leading-relaxed flex gap-3">
              <span class="text-primary/50 mt-1 shrink-0">—</span>
              {note}
            </li>
        {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
