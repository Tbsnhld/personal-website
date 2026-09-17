<script>
	let { image_url } = $props();
</script>

<figure >
	<div class="outerBevel">
		<div class="flatSurface">
			<div class="innerBevel">
				<img
					src={image_url}
					alt="Profile Picture"
					width="382"
					height="326"
					class="map"
				/>
			</div>
		</div>
	</div>
</figure>

<style>

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	figure {
		width: max(30vw,450px);
		margin: 1em auto;
	}

	.outerBevel {
		/* of frame */
		box-shadow: 4px 6px 12px 0 black;
		border-width: 5px;
		border-style: solid;
		border-color: rgb(91, 83, 52) rgb(26, 24, 19) rgb(45, 39, 31) rgb(95, 81, 54)
	}

	.flatSurface {
		/* of frame */
		border: 12px solid rgb(54, 41, 28);
	}

	.innerBevel {
		/* of frame */
		border-width: 5px;
		border-style: solid;
		border-color: rgb(24, 19, 13) rgb(84, 75, 66) rgb(130, 108, 86) rgb(24, 19, 13);
	}

	.map {
		/* including mat and gold beveled edge of mat */
		display: block;
		clear: both;
		height: 100%;
		width: 100%;
		padding: 7.5% 7.5% 10% 7.5%; /* Mat width */
		background-color: rgb(255, 249, 224); /* Mat color */
		border-width: 3px; /* Gold edge of mat */
		border-style: solid;
		border-color: rgb(35, 30, 21) rgb(110, 95, 32) rgb(86, 77, 48) rgb(50, 47, 39);
	}
</style>
