<script lang="ts">
  let { className = "" } = $props();
</script>

<figure class="CardOrnament">
  <svg width="90" height="26" viewBox="0 0 90 26" fill="none" class="text-primary mx-auto mb-5 {className}">
    <line x1="0" y1="13" x2="33" y2="13" stroke="currentColor" stroke-width="0.7" stroke-opacity="0.48" />
    <line x1="57" y1="13" x2="90" y2="13" stroke="currentColor" stroke-width="0.7" stroke-opacity="0.48" />
    <path d="M45,3 L52,13 L45,23 L38,13 Z" fill="currentColor" />
    <path d="M45,7 L49,13 L45,19 L41,13 Z" fill="none" stroke="#0a1409" stroke-width="0.7" />
  </svg>
</figure>
