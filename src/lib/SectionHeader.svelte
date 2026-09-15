  <script>
let {label, title} = $props();
</script>

<div class="flex flex-col items-start mb-10">
  <p class="font-mono text-[10px] tracking-[0.35em] uppercase text-primary mb-2">{label}</p>
  <h2
    class="text-3xl md:text-4xl text-foreground mb-4 leading-tight"
    style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontStyle: "italic" }}
  >
    {title}
  </h2>
  <div class="w-16 h-px bg-primary opacity-40" />
</div>
