<script lang="ts">
  let { className = "" } = $props();
</script>

<figure>
  <svg
    viewBox="0 0 400 360"
    fill="none"
    class="absolute text-primary opacity-[0.035] w-[480px] h-auto pointer-events-none select-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Large centre petal -->
    <path d="M200,20 C192,55 182,100 185,145 C188,185 200,205 200,205 C200,205 212,185 215,145 C218,100 208,55 200,20Z" fill="currentColor" />
    <!-- Upper-left petal -->
    <path d="M184,80 C165,48 132,42 118,56 C104,70 110,102 130,112 C150,122 178,110 184,80Z" fill="currentColor" />
    <!-- Upper-right petal -->
    <path d="M216,80 C235,48 268,42 282,56 C296,70 290,102 270,112 C250,122 222,110 216,80Z" fill="currentColor" />
    <!-- Mid-left petal -->
    <path d="M182,130 C155,104 115,106 104,126 C93,146 106,178 126,182 C150,186 178,166 182,130Z" fill="currentColor" />
    <!-- Mid-right petal -->
    <path d="M218,130 C245,104 285,106 296,126 C307,146 294,178 274,182 C250,186 222,166 218,130Z" fill="currentColor" />
    <!-- Lower-left petal -->
    <path d="M184,175 C155,158 116,170 108,195 C100,220 120,248 145,244 C168,240 182,214 184,175Z" fill="currentColor" />
    <!-- Lower-right petal -->
    <path d="M216,175 C245,158 284,170 292,195 C300,220 280,248 255,244 C232,240 218,214 216,175Z" fill="currentColor" />
    <!-- Wide bottom petal left -->
    <path d="M192,210 C168,198 130,208 120,230 C110,252 128,278 152,274 C176,270 192,246 192,210Z" fill="currentColor" />
    <!-- Wide bottom petal right -->
    <path d="M208,210 C232,198 270,208 280,230 C290,252 272,278 248,274 C224,270 208,246 208,210Z" fill="currentColor" />
    <!-- Stem -->
    <line x1="200" y1="205" x2="200" y2="320" stroke="currentColor" stroke-width="4" />
    <!-- Left leaf -->
    <path d="M200,270 C172,245 130,248 120,270 C132,290 172,295 200,270Z" fill="currentColor" />
    <!-- Right leaf -->
    <path d="M200,270 C228,245 270,248 280,270 C268,290 228,295 200,270Z" fill="currentColor" />
    <!-- Stamen dots -->
    <circle cx="200" cy="140" r="6" fill="currentColor" fill-opacity="0.6" />
    <circle cx="190" cy="135" r="3.5" fill="currentColor" fill-opacity="0.4" />
    <circle cx="210" cy="135" r="3.5" fill="currentColor" fill-opacity="0.4" />
    <circle cx="195" cy="148" r="3" fill="currentColor" fill-opacity="0.3" />
    <circle cx="205" cy="148" r="3" fill="currentColor" fill-opacity="0.3" />
  </svg>
</figure>
