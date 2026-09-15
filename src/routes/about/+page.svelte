<script>
	import ImageFrame from '$lib/image_frame.svelte';
	import DecoratorLine from '$lib/DecoratorLine.svelte';
  import CornerOrnamentContainer from '$lib/CornerOrnamentContainer.svelte';

  let links = [
    { label: "GitHub", href: "https://github.com/Tbsnhld" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tobias-neuhold/" },
    { label: "tobias@nhld.net", href: "mailto:tobias@nhld.net" },
    { label: "CV / Résumé", href: "#" },
  ]

</script>

<div class="relative flex h-full min-h-0 flex-col p-[2vw] lg:pr-[5vw] lg:pl-[5vw]">
  <div class="pointer-events-none absolute inset-0">
    <CornerOrnamentContainer />
  </div>
	<div class="flex flex-shrink-0 grow flex-col gap-8 lg:flex-row">
		<div class="mr-[10vw] hidden 2xl:inline-flex flex flex-col justify-center">
			<ImageFrame image_url="/icon.jpg" />
		</div>

		<div class="jugendstil-content">
			<div class="flex w-full flex-col items-center">
				<div class="w-[20vw]">
					<DecoratorLine />
				</div>
			</div>
			<div class="jugendstil-border">
				<h1 class="mb-8 font-bodoniamoda text-8xl text-main-yellow ">
					About
				</h1>
				<p
					class="font-lora text-md leading-relaxed text-main-light "
				>
          I am a masters computer science student with a special interest in data, security and privacy at the 
          University Kassel. The core however will always be the human for me with technology being supposed to assist and protect. 
				</p>
				<div class="floral-divider"></div>
				<p
					class="font-lora text-md leading-relaxed text-main-light "
				>
          Besides computer science, I enjoy to move my body: weight lifting, cycling, running and hiking are part of my daily life.
          My guilty pleasure however would be watching documentaries and reading about nature, history and - of course - technology.
				</p>
			</div>
        <div class="font-lora flex flex-wrap gap-5 pt-4">
        {#each links as link}
          <a
            key={link.label}
            href={link.href}
            class="text-[1.5vh] tracking-[0.16em] text-foreground hover:text-primary transition-colors border-b border-current pb-px"
          >
            {link.label}
          </a>
        {/each}
      </div>
		</div>
	</div>
</div>

<style>
	.jugendstil-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem;
		max-width: 60%;
		margin-left: auto;
		margin-right: 0;
	}

	.jugendstil-border {
		position: relative;
		padding: 2rem;
		border-left: 3px solid var(--color-main-yellow);
		border-top: 1px solid rgba(212, 169, 0, 0.3);
		border-bottom: 1px solid rgba(212, 169, 0, 0.3);
		border-right: none;
		background: rgba(8, 19, 10, 0.7);
		backdrop-filter: blur(2px);
	}

	.jugendstil-border::before {
		content: '';
		position: absolute;
		top: -5px;
		left: -5px;
		width: 50px;
		height: 50px;
		border-left: 3px solid var(--color-main-yellow);
		border-top: 3px solid var(--color-main-yellow);
		border-radius: 10px 0 0 0;
	}

	.jugendstil-border::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: -5px;
		width: 50px;
		height: 50px;
		border-left: 3px solid var(--color-main-yellow);
		border-bottom: 3px solid var(--color-main-yellow);
		border-radius: 0 0 0 10px;
	}

	.floral-divider {
		width: 100%;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			var(--color-main-yellow) 20%,
			var(--color-main-yellow) 30%,
			transparent 30%,
			transparent 40%,
			var(--color-main-yellow) 40%,
			var(--color-main-yellow) 50%,
			transparent 50%,
			transparent 60%,
			var(--color-main-yellow) 60%,
			var(--color-main-yellow) 70%,
			transparent 70%,
			transparent 80%,
			var(--color-main-yellow) 80%,
			var(--color-main-yellow) 100%
		);
		background-size: 20px 2px;
		margin: 2rem 0;
		opacity: 0.6;
	}

	@media (max-width: 1024px) {
		.jugendstil-content {
			max-width: 100%;
			margin-left: 0;
			margin-right: 0;
			width: 100%;
		}
		.jugendstil-border {
			border-left: none;
			border-top: 3px solid var(--color-main-yellow);
			border-bottom: 1px solid rgba(212, 169, 0, 0.3);
			padding: 1rem;
		}
		.jugendstil-border::before,
		.jugendstil-border::after {
			display: none;
		}
	}
</style>
