<script>
	import ImageFrame from '$lib/image_frame.svelte';
</script>

<aside class="fixed top-34 left-10 z-100 items-start gap-10 md:flex">
	<a href="/" class="flex shrink-0 items-center justify-center">
		<img class="h-14 w-14 rounded-full object-cover" src="/icon.jpg" alt="Home" />
	</a>

	<nav class="align-center pt-2 font-figne text-[15vw] text-main-yellow lg:text-[10vh]">
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
</aside>
<div class="align-end flex">
	<ImageFrame image_url="/icon.jpg" />
</div>
<div class="flex h-full items-end justify-center pb-8">
	<div class="shadow-lg">
		<button class="rounded-full border border-white px-8 py-2 font-bold">EMAIL FORM</button>
	</div>
</div>
