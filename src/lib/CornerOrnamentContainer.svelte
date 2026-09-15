<script lang="ts">
  import CornerOrnamentIcon from "./CornerOrnamentIcon.svelte";
  
  let { className = "" } = $props();
</script>

<div class="absolute inset-0 overflow-hidden inset-6">
    <div class="absolute h-full top-0 left-0"><CornerOrnamentIcon /></div>
    <div class="absolute h-full top-0 right-0 scale-x-[-1]"><CornerOrnamentIcon /></div>
    <div class="absolute h-full bottom-0 left-0 scale-y-[-1]"><CornerOrnamentIcon /></div>
    <div class="absolute h-full bottom-0 right-0 scale-x-[-1] scale-y-[-1]"><CornerOrnamentIcon /></div>
</div>
