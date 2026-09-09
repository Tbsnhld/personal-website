<script lang="ts">
	import './layout.css';
	const { children } = $props();
</script>

<div class="relative flex h-screen w-screen flex-col">
	<div class="crown-molding-top"></div>
	<div class="min-h-0 flex-1 overflow-auto">
		{@render children()}
	</div>
	<div class="crown-molding-bottom"></div>
	<nav>
		<a href="/" class="home-link">
			<span class="font-figne text-main-yellow">Home</span>
		</a>
	</nav>
</div>

<style>
	.crown-molding-top {
		height: 100px;
		width: 100%;
		border-radius: 2px;
		background: linear-gradient(
			to bottom,
			var(--molding-200) 0%,
			var(--molding-50) 4%,
			var(--molding-50) 6%,
			var(--molding-400) 6%,
			var(--molding-400) 7%,
			var(--molding-50) 8%,
			var(--molding-50) 10%,
			var(--molding-50) 29%,
			var(--molding-400) 29%,
			var(--molding-400) 30%,
			var(--molding-100) 31%,
			var(--molding-50) 40%,
			var(--molding-200) 48%,
			var(--molding-400) 55%,
			var(--molding-500) 62%,
			var(--molding-300) 65%,
			var(--molding-500) 68%,
			var(--molding-500) 69%,
			var(--molding-600) 72%,
			var(--molding-700) 82%,
			var(--molding-800) 92%,
			var(--molding-900) 100%
		);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
	}

	.crown-molding-bottom {
		height: 100px;
		width: 100%;
		border-radius: 2px;
		background: linear-gradient(
			to top,
			var(--molding-200) 0%,
			var(--molding-50) 4%,
			var(--molding-50) 6%,
			var(--molding-400) 6%,
			var(--molding-400) 7%,
			var(--molding-50) 8%,
			var(--molding-50) 10%,
			var(--molding-50) 29%,
			var(--molding-400) 29%,
			var(--molding-400) 30%,
			var(--molding-100) 31%,
			var(--molding-50) 40%,
			var(--molding-200) 48%,
			var(--molding-400) 55%,
			var(--molding-500) 62%,
			var(--molding-300) 65%,
			var(--molding-500) 68%,
			var(--molding-500) 69%,
			var(--molding-600) 72%,
			var(--molding-700) 82%,
			var(--molding-800) 92%,
			var(--molding-900) 100%
		);
		box-shadow: 0 -8px 16px rgba(0, 0, 0, 0.45);
	}

	.home-link {
		position: fixed;
		bottom: 2rem;
		left: 2rem;
		font-size: 1rem;
		text-decoration: none;
		transition: opacity 0.3s ease;
		z-index: 10;
	}

	.home-link:hover {
		opacity: 0.7;
	}
</style>
