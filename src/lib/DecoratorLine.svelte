<script lang="ts">
  let { className = "" } = $props();
</script>

<figure>
  <svg
    viewBox="0 0 600 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-full text-primary {className}"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="10" y1="25" x2="235" y2="25" stroke="currentColor" stroke-width="0.75" stroke-opacity="0.45" />
    <line x1="365" y1="25" x2="590" y2="25" stroke="currentColor" stroke-width="0.75" stroke-opacity="0.45" />

    <path d="M235,25 Q216,18 204,22 Q192,26 186,16" stroke="currentColor" fill="none" stroke-width="0.9" stroke-opacity="0.65" />
    <ellipse cx="204" cy="20" rx="4" ry="2.5" transform="rotate(-22 204 20)" fill="currentColor" fill-opacity="0.32" />
    <path d="M186,16 Q175,5 166,10 Q173,20 186,16Z" fill="currentColor" fill-opacity="0.28" />

    <path d="M365,25 Q384,18 396,22 Q408,26 414,16" stroke="currentColor" fill="none" stroke-width="0.9" stroke-opacity="0.65" />
    <ellipse cx="396" cy="20" rx="4" ry="2.5" transform="rotate(22 396 20)" fill="currentColor" fill-opacity="0.32" />
    <path d="M414,16 Q425,5 434,10 Q427,20 414,16Z" fill="currentColor" fill-opacity="0.28" />

    <path d="M300,7 C297,13 294,20 295,25 C296,30 300,33 300,33 C300,33 304,30 305,25 C306,20 303,13 300,7Z" fill="currentColor" />
    <path d="M294,22 C289,15 280,15 277,19 C274,23 276,30 282,31 C288,32 293,27 294,22Z" fill="currentColor" fill-opacity="0.68" />
    <path d="M306,22 C311,15 320,15 323,19 C326,23 324,30 318,31 C312,32 307,27 306,22Z" fill="currentColor" fill-opacity="0.68" />
    <path d="M294,28 C288,23 280,25 278,31 C276,37 281,42 287,40 C293,38 294,34 294,28Z" fill="currentColor" fill-opacity="0.42" />
    <path d="M306,28 C312,23 320,25 322,31 C324,37 319,42 313,40 C307,38 306,34 306,28Z" fill="currentColor" fill-opacity="0.42" />
    <line x1="300" y1="33" x2="300" y2="46" stroke="currentColor" stroke-width="1.2" />
    <path d="M300,40 C292,33 281,34 278,41 C283,46 295,46 300,40Z" fill="currentColor" fill-opacity="0.52" />
    <path d="M300,40 C308,33 319,34 322,41 C317,46 305,46 300,40Z" fill="currentColor" fill-opacity="0.52" />
  </svg>
</figure>
