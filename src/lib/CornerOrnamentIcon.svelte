<script lang="ts">
  let { className = "" } = $props();
</script>

<figure>
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" class="text-primary {className}">
    <path d="M4,38 L4,4 L38,4" stroke="currentColor" stroke-width="1" stroke-opacity="0.55" />
    <path d="M4,4 Q20,4 26,13 Q17,23 4,20Z" fill="currentColor" fill-opacity="0.3" />
    <circle cx="38" cy="4" r="2.5" fill="currentColor" fill-opacity="0.48" />
    <circle cx="4" cy="38" r="2.5" fill="currentColor" fill-opacity="0.48" />
    <path d="M22,5 Q30,10 27,20 Q20,22 16,17" stroke="currentColor" fill="none" stroke-width="0.8" stroke-opacity="0.48" />
    <circle cx="24" cy="14" r="1.8" fill="currentColor" fill-opacity="0.26" />
  </svg>
</figure>
