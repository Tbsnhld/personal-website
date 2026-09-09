<script>
	import ImageFrame from '$lib/image_frame.svelte';
	import DecoratorLine from '$lib/DecoratorLine.svelte';
</script>

<div class="flex h-full min-h-0 flex-col p-[2vw] lg:pr-[5vw] lg:pl-[5vw]">
	<div class="flex flex-shrink-0 grow flex-col gap-8 lg:flex-row">
		<div class="mt-[2vh] mr-[10vw] hidden flex-none flex-shrink-0 2xl:inline">
			<ImageFrame image_url="/icon.jpg" />
		</div>

		<div class="jugendstil-content">
			<div class="flex w-full flex-col items-center">
				<div class="w-[20vw]">
					<DecoratorLine />
				</div>
			</div>
			<div class="jugendstil-border">
				<h1 class="mb-8 font-figne text-[8vw] text-main-yellow lg:text-[4vw] 2xl:text-[4vh]">
					About Me
				</h1>
				<p
					class="mb-6 font-soria text-[4vw] leading-relaxed text-main-light lg:text-[2vw] 2xl:text-[2vh]"
				>
					A passionate creator of digital experiences, blending artistry with code. My work draws
					inspiration from the flowing lines and organic forms of Jugendstil, creating interfaces
					that feel alive and breathing.
				</p>
				<div class="floral-divider"></div>
				<p
					class="font-soria text-[4vw] leading-relaxed text-main-light lg:text-[2vw] 2xl:text-[2vh]"
				>
					With roots in traditional craftsmanship and branches in modern technology, I craft digital
					spaces where form and function harmonize like a well-composed symphony.
				</p>
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
		background: rgba(0, 21, 20, 0.7);
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
