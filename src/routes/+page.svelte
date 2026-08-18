<script>
import ImageFrame from '$lib/image_frame.svelte';
</script>

<div class="flex h-full flex-col min-h-0">
  <div class="flex flex-row items-start gap-8 grow flex-shrink-0">
    <a href="/" class="pl-4 pt-6 shrink-0">
      <img class="h-14 w-14 rounded-full object-cover" src="/icon.jpg" alt="Home" />
    </a>

    <nav class="flex-1 flex-shrink-0 pt-2 font-figne text-[13vw] text-main-yellow lg:text-[12vw] 2xl:text-[11vh]">
      <ul class="flex flex-col gap-5">
        <li class="active">
          <a href="/" class="transition-opacity hover:opacity-70">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/about" class="transition-opacity hover:opacity-70">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="/projects" class="transition-opacity hover:opacity-70">
            <span class="font-figne">Projects</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="hidden 2xl:inline flex-none mr-[10vw] mt-[2vh] flex-shrink-0">
      <ImageFrame image_url="/icon.jpg" />
    </div>
  </div>
  <div class="flex-none pb-8 text-center">
    <div class="shadow-lg">
      <button class="rounded-full border border-white px-8 py-2 font-bold">EMAIL FORM</button>
    </div>
  </div>
</div>
