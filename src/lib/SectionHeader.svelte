  <script>
let {label, title} = $props();
</script>

<div class="flex flex-col items-start mb-10">
  <p class="font-lora text-xs tracking-[0.35em] text-primary uppercase">{label}</p>
  <h1
    class="text-3xl md:text-5xl text-foreground mb-4 leading-tight"
    style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontStyle: "italic" }}
  >
    {title}
  </h1>
  <div class="w-16 h-px bg-primary opacity-40" />
</div>
