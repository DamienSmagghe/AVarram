<template>
    <section>
        <video src="../../../static/img/landing.mp4" ref="video" autoplay muted loop></video>
        <div class="content">
            <h1>A'Varram</h1>
            <h2>A best friend for a life time</h2>
        </div>

       <a href="#anchor"></a> <div class="arrowDown" id="scroll" @click="autoScroll"></div>
       <div id="anchor"></div>
    </section>
</template>

<script>
export default {
    name: 'landing',
    data () {
        return {
            data: {
                contributor: 0
            }
        }
    },
    methods: {
        autoScroll() {
            window.scrollTo(0,window.innerHeight)
        }
    }
}
</script>

<style lang="scss" scoped>

    section {
        position: relative;
        
        video {
            min-height: 100%;
            min-width: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
        }
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-100%);
            z-index: 2;
            color: white;
            font-family: 'Exo';

            h1,h2,h3 {
                margin: 0;
                padding: 0;
            }
            h1 {
                font-size: 75px;
                text-transform: uppercase;
            }

            h2 {
                font-size: 50px;
                font-weight: normal;
            }

            
        }

        h3 {
            position: absolute;
            bottom: 115px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 25px;

            &::after {
                content: '';
                display: block;
                width: 33%;
                height: 2px;
                background: white;
                position: absolute;
                
                bottom: -4px;
                left: 50%;
                transform: translateX(-50%);
                transition: .3s;
            }

            &:hover::after{
                width: 40%;
            }
        }

        .arrowDown{
            width: 20px;
            height: 20px;

            border-bottom: 2px solid white;
            border-left: 2px solid white;
            border-radius: 2px;

            position: absolute;
            left: 50%;
            bottom: 30px;
            transform: translateX(-50%) rotate(-45deg);

            &:hover {
                cursor: pointer;
            }
        }

    }

    @media screen and (max-width: 400px) {
		section {
            height: 100vh;
            
            .content {
                h1 {
                    font-size: 40px;
                }

                h2 {
                    font-size: 30px;
                }
            }

            h3 {
                font-size: 15px;
                text-align: center;
            }
		}
  }
</style>


