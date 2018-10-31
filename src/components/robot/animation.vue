<template>
	<div>
		<div class="robotContainer">
			<robot/>
		</div>
		<button @click="$children[0].animate('blink')">Blink</button>
		<button @click="$children[0].animate('wink')">Wink</button>
		<button @click="$children[0].jumps()">Jump</button>
		<button @click="$children[0].animate('happy')">Happy</button>
		<div class="animationBackground"></div>
	</div>
</template>

<script>

import Robot from './robot'
import Parallax from '../parralax'

export default {
	name: 'animation',
	components: {
		Robot,
		Parallax
	},
	mounted () {
		const robot = this.$children[0]
		
		robot.jumps()

		setTimeout( () => {

			robot.animate('happy')

			setInterval(() => {
				if (!robot.happy) {
					robot.animate('blink')
				}
			},3000)

		}, 1100)
	}
}
</script>

<style lang="scss" scoped>

	.animationBackground{
		background: lightblue;
		filter: blur(0px);
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}

	.robotContainer {
		z-index: 10;
		position: absolute;
		width: 40%;
		height: auto;
		left: 50%;
		bottom: 0;
		transform: translate(-50%,100%);
	}
</style>
