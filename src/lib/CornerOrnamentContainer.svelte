<script lang="ts">
  import CornerOrnamentIcon from "./CornerOrnamentIcon.svelte";
  
  let { className = "" } = $props();
</script>

<figure class="{className}">
  <div class="absolute top-0 left-0"><CornerOrnamentIcon /></div>
  <div class="absolute top-0 right-0 scale-x-[-1]"><CornerOrnamentIcon /></div>
  <div class="absolute bottom-0 left-0 scale-y-[-1]"><CornerOrnamentIcon /></div>
  <div class="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]"><CornerOrnamentIcon /></div>
</figure>
