<template>
    <div class="bubbleContainer">
        <div class="bubble" @mouseover="switchHover" @mouseout="switchHover">
            <span class="word">{{ word }}</span>
            <span class="word high" :class="{fade: hover}" v-if="hover"> {{ word }}</span>
            <span class="sentence" :class="{fade: hover}" v-if="hover"> {{ sentence }}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'bubble',
    props: ['word','sentence'],
    data() {
        return {
            hover: false
        }
    },
    methods: {
        switchHover() {
            this.hover = !this.hover
        }
    }
}
</script>

<style lang="scss" scoped>
    .bubbleContainer {
        
        width: 200px;
        height: 200px;

        .bubble {
            position: relative;

            width: 100%;
            height: 100%;
            border-radius: 50%;

            background: white;
            box-shadow: 2px 5px 20px rgba(black,.5);

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            overflow: hidden;

            .word{
                text-transform: capitalize;
                font-size: 30px;
                font-weight: bold;
                font-family: 'Exo';

                &.high {
                    color: white;
                    position: absolute;
                    top: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 3;

                    &::after {
                        content: '';
                        display: block;
                        width: 50%;
                        height: 1px;
                        background: white;

                        position: absolute;
                        left: 50%;
                        bottom: -2px;

                        transform: translateX(-50%);
                    }
                }
            }

            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
                background: #22B8FD;
                transform: translateY(100%);
                transition: .5s;
                z-index: 2;
            }

            &:hover::after{
                transform: translateX(0);
            }

            .sentence {
                display: inline-block;
                width: 70%;

                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);

                margin-top: 10px;
                text-align: center;
                color: white;
                z-index: 3;
                font-family: 'PT Sans';
                font-size: 18px;
            }
            .fade {
                animation: fadeIn 1s;
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 400px) {
        .bubbleContainer {
            width: 125px;
            height: 125px;
            
            .bubble {
                .word.high {
                    font-size: 20px;
                }

                .sentence {
                    font-size: 13px;
                    margin-top: 20px;
                }
            }
        }
    }
</style>


