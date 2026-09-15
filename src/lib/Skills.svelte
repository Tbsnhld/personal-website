<script>
  import SectionHeader from './SectionHeader.svelte';
  import TimelineNode from './TimeLineNode.svelte';
  let {groups} = $props();
</script>

<SectionHeader label="Competences" title="Technical Skills" />
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
  {#each groups as group}
    <div key={group.category}>
      <h3 class="font-lora text-sm tracking-[0.22em] uppercase text-primary mb-4 pb-2.5 border-b border-primary/20">
        {group.category}
      </h3>
      <ul class="space-y-2">
        {#each group.items as item}
          <li key={item} class="flex items-center gap-2.5 text-sm text-foreground/68">
            <svg width="5" height="5" viewBox="0 0 5 5" class="text-primary/50 shrink-0">
              <rect width="5" height="5" transform="rotate(45 2.5 2.5)" fill="currentColor" />
            </svg>
            {item}
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
