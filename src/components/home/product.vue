<template>
    <section class="homeProduct">
        <h2 class="title" id="scroll">Presentation</h2>
        <parallax v-for="(text,i) in texts" parent=".homeProduct" :parentSpeed="0">
            <bubble :word="text.word" :sentence="text.sentence" :class="text.word" class="parralax"/>
        </parallax>
        <div class="robotContainer" ref="robotContainer">
            <robot></robot>
        </div>
    </section>
</template>

<script>

import Robot from '../robot/robot'
import Bubble from '../useful/bubble'
import Parallax from '../useful/parralax'

export default {
    name: 'homeProduct',
    components: {
        Robot,
        Bubble,
        Parallax
    },
    data() {
        return {
            texts: [
                {
                    word: 'play',
                    sentence: '10h with your pet'
                },
                {
                    word: 'food',
                    sentence: '2 treats for your pet'
                },
                {
                    word: 'sensor',
                    sentence: 'Automatic obstacle avoidance'
                },
                {
                    word: 'control',
                    sentence: 'Program A\'varram for the day'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    section {
        background: #E2F5FE;
    }
    .robotContainer{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        width: 40%;
        height: auto;
    }

    svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
    }

    .play {
        position: absolute;
        left: 10%;
        top: 5%;
    }

    .sensor {
        position: absolute;
        right: 5%;
        top: 5%;
    }

    .control {
        position: absolute;
        left: 7%;
        bottom: 5%;
    }

    .food {
        position: absolute;
        right: 7%;
        bottom: 8%;
    }

    @media screen and (max-width: 400px) {
		section {
			height: 100vh;
        }
        
        .play {
            top: 15%;
        }

        .sensor {
            top: 15%;
        }

        .control {
            bottom: 10%;
        }

        .food {
            bottom: 10%;
        }
  }

</style>
