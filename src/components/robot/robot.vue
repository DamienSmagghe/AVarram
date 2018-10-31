<template>
<div class="robot" :class="hasToJump" @click="animate('happy')">
	<vue-typed-js v-if="speak" :strings="getSentences" :showCursor="false" class="speak" contentType="html" >
 		<h1 class="typing"></h1>
	</vue-typed-js>
	<div class="eyes parallax" :class="eyes">
		<div class="eye"></div>
	</div>
	<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 741.82 443.98">
		<title>robotV2</title>
		<g id="Calque_1-2" data-name="Calque 1">
			<path class="cls-1" d="M382.7,416.8c-20.9,0-51.2-14.4-122.2-18.5-159.2-5.8-45,62.7-177.7,47.3C-24.6,392.6,0-9,116.2,9.5c141.9,98.1,133.2,26.1,266.4,27.7"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-1" d="M382.7,416.8c20.9,0,51.2-14.4,122.2-18.5,159.2-5.8,45,62.7,177.7,47.3C789.9,392.6,765.3-9,649.1,9.5,507.2,107.6,515.9,35.6,382.6,37.2"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-2" d="M140.7,25.7c-21.1,0-31.3,395.3,3.1,418.4C101.7,444.9,102.5,17.1,140.7,25.7Z" transform="translate(-11.75 -6.38)" />
			<path id="circleOfEyes" class="cls-3" d="M95.8,10.7C71.1,2.4,46.9,408,91,445.7c27,2.3,21.3,2.5,27,2.3C94.7,405.7,75.6,26,123,14.2,120.7,8.9,100.7,7.1,95.8,10.7Z"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-2" d="M625.9,25.7c21.1,0,31.3,395.3-3.1,418.4C664.9,444.9,664.1,17.1,625.9,25.7Z" transform="translate(-11.75 -6.38)" />
			<path class="cls-3" d="M670.8,10.7c24.7-8.3,48.8,397.3,4.7,435-27,2.3-21.3,2.5-27,2.3,23.3-42.3,42.4-422-5-433.8C645.9,8.9,665.9,7.1,670.8,10.7Z"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-4" d="M382.7,416.8c20.9,0,51.2-14.4,122.2-18.5,159.2-5.8,45,62.7,177.7,47.3C789.9,392.6,765.3-9,649.1,9.5,507.2,107.6,515.9,35.6,382.6,37.2"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-4" d="M382.7,416.8c-20.9,0-51.2-14.4-122.2-18.5-159.2-5.8-45,62.7-177.7,47.3C-24.6,392.6,0-9,116.2,9.5c141.9,98.1,133.2,26.1,266.4,27.7"
			transform="translate(-11.75 -6.38)" />
			<path d="M486.8,261.7H278.7a55.14,55.14,0,0,1-55.1-55.1h0a55.14,55.14,0,0,1,55.1-55.1H486.8a55.14,55.14,0,0,1,55.1,55.1h0A55.08,55.08,0,0,1,486.8,261.7Z"
			transform="translate(-11.75 -6.38)" />
			<polygon class="cls-3" points="488.45 -230.78 488.45 -230.78 488.45 -230.78 488.45 -230.78" />
			<ellipse cx="372.05" cy="288.52" rx="15.8" ry="7.3" />
			<path class="cls-5" d="M429.2,399.5H337.7a19,19,0,0,1-19-19h0a19,19,0,0,1,19-19h91.5a19,19,0,0,1,19,19h0A19,19,0,0,1,429.2,399.5Z"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-6" d="M335.4,152.8l108.9,67.6s54.5.5,67,0c24.6-6.6,32.1-58.5-13.4-65.6C453.3,151.8,335.4,152.8,335.4,152.8Z"
			transform="translate(-11.75 -6.38)" />
			<path class="cls-7" d="M448.2,384.5" transform="translate(-11.75 -6.38)" />
			<path class="cls-7" d="M318.7,385.5" transform="translate(-11.75 -6.38)" />
			<path class="cls-8" d="M447.1,380.5c0,7.1-4.7,12.8-11.8,12.8H332.4a12.76,12.76,0,0,1-12.8-12.8h0" transform="translate(-11.75 -6.38)" />
		</g>
		<g id="Calque_3" data-name="Calque 3">
			<path class="cls-6" d="M223.7,203.2c1.3-8.9,17-43.4,39.5-44.7,6.1,2.3,6.8,6.8,6.8,6.8s-38.3,12.3-39,40Z"
			transform="translate(-11.75 -6.38)" />
		</g>
	</svg>

</div>
</template>

<script>

import Vue from 'vue'

export default {
	name: 'robot',
	data () {
		return {
			blink: false,
			wink: false,
			jump: false,
			high: false,
			happy: false,
			speak: false,
			message: 'Hey',
			sentences: ['Hey','I\'m Varram <br/> The pet fitness robot']
		}
	},
	computed: {
		eyes() {
			return {
				blink: this.blink,
				wink: this.wink,
				happy: this.happy
			}
		},
		hasToJump() {
			return {
				jump: this.jump,
				high: this.high
			}
		},
		getSentences() {
			return this.sentences
		}
	},
	methods: {
		animate(property) {
			if (!this.blink) {
				this[property] = !this[property]

				setTimeout( () => {
					this[property] = !this[property]
				},1000)
			}
		},
		speaks(message) {
			console.log('*Robot voice*',message)
		},
		jumps() {
			this.jump = !this.jump
			setTimeout( () => {
				this.jump = !this.jump
				this.high = true
			},1000)
		}
	},
	mounted () {
		const eyes = document.querySelector('.eye')
		const eyesData = eyes.getBoundingClientRect()
		
		// Get the middle of each point to be able to convert clientX and Y
		const eyesXMid = eyesData.x + eyesData.width / 2
		const eyesYMid = eyesData.y + eyesData.height / 2

		const maxValue = 20
		window.addEventListener('mousemove', e => {

			// Get the ratio with max value
			const widthRatio = window.innerWidth / maxValue
			const heightRatio = window.innerHeight / maxValue
			let x,y

			// When 0 <= e.clientX <= eyesXMid, allow x to be -maxValue <= x <= 0
			if (e.clientX < eyesXMid)
				x = ((window.innerWidth/2 - e.clientX) / -widthRatio) * 2
			else 
				x = e.clientX / widthRatio

			// When 0 <= e.clientY <= eyesYMid, allow x to be -maxValue/2 <= y <= 0

			if (e.clientY < eyesYMid)
				y = ((window.innerHeight/2 - e.clientY) / -heightRatio)
			else 
				y = e.clientY / widthRatio
			
			if (window.innerHeight > window.innerWidth)
				y = 0

			this.$TwinLite.to(eyes,1,{x,y})
		})

	}
}
</script>

<style lang="scss" scoped>

	.robot {
		width: 100%;
		height: auto;
		position: relative;

		cursor: pointer;

		.cls-1{fill:#fff;}
		.cls-1,.cls-4{stroke:#000;}
		.cls-1,.cls-4,.cls-5,.cls-7,.cls-8{stroke-miterlimit:10;}
		.cls-2{fill:#727171;}
		.cls-3{fill:#d8d8d8;}
		.cls-4,.cls-7,.cls-8{fill:none;}
		.cls-4{stroke-width:5px;}
		.cls-5{fill:#1c1c1c;stroke:#fff;}
		.cls-6{fill:#878686;opacity:0.26;isolation:isolate;}
		.cls-7{stroke:#878686;}
		.cls-8{stroke:#777;}

		.speak {
			width: 100%;
			height: 100px;

			position: absolute;
			left: 50%;
			top: 0;
			transform: translate(-40%,-100%);

			h1 {
				font-size: 27px;
				text-align: left;
			}
		}

		.eyes {
			width: 20%;
			height: 20%;

			display: flex;
			align-items: center;

			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-75%);

			.eye{
				display: flex;
				justify-content: space-between;
				align-items: center;

				position: relative;
				height: 75%;
				width: 100%;

				&::before,&::after {
					content: '';
					display: block;
					width: 10px;
					height: 100%;
					background: #00f5f7;
					border-radius: 5px; 
					filter: blur(1px);
				}
			}

			&.happy {
				.eye {
					&::before,&::after {
						content: '';
						display: block;
						width: 40px;
						height: 40px;
						background: transparent;

						border-left: 10px solid #00f5f7;
						border-top: 10px solid #00f5f7;
						border-radius: 5px; 

						transform: rotate(45deg);
						filter: blur(1px);
					}

					&::before{
						transform: translate(-50%,25%) rotate(45deg);
					}

					&::after{
						transform: translate(50%,25%) rotate(45deg);
					}
				}
			}
		}

		// Animations 

		.blink {
			.eye::before,.eye::after{
				animation: blink 1s cubic-bezier(.45,1.21,.78,.84);
			}
		}

		.wink {
			.eye::after{
				animation: blink 1s cubic-bezier(.63,1.31,.86,.92);
			}
		}

		&.jump {
			animation: jump 1s cubic-bezier(.51,1.87,.81,1.12);
		}

		&.high {
			transform: translateY(-100%);
		}
	}

	@keyframes blink {
		0%{
			height: 100%;
		}

		50% {
			height: 0;
		}

		100%{
			height: 100%;
		}
	}

	@keyframes jump {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-100%);
		}
	}

	@media screen and (max-width: 400px) {
		.robot {
			.eyes {
				&.happy {
					.eye {
						&::before,&::after {
							width: 10px;
							height: 10px;

							border-left: 5px solid #00f5f7;
							border-top: 5px solid #00f5f7;
						}

					}
				}
			}
		}
	}
	
</style>

