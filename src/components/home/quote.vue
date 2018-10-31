<template>
    <section>
        <h2 class="title">Tested and approved</h2>
        <div class="content">
            <h3>They trusted us, why not you ?</h3>
            <div class="quote"> <span>"</span>Really fun to play with, I love it. It makes the time go faster when I’m alone at home and it give me really good treat I approve this product</div>
        </div>
        <div class="animal" v-for="(animal,i) in animals" :class="'animal-'+i" :ref="'animal'+i">
            <img :src="animal" alt="Animal image">
        </div>
    </section>
</template>

<script>
export default {
    name: 'quote',
    data () {
        return {
            animals: ['../../../static/img/chat1.png','../../../static/img/chien1.png','../../../static/img/chien2.png','../../../static/img/chat2.png','../../../static/img/chien3.png','../../../static/img/chien4.png']
        }
    },
    mounted() {
        this.animals.forEach((animal,i) => {
            if (i % 2 === 0) {
                this.$refs['animal'+i][0].classList.add('rotateWatch')
            }
            else {
                this.$refs['animal'+i][0].classList.add('rotateAntiWatch')
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    section {
        background: rgba(34, 184, 253,.5);
        color: white;
        margin-top: 40px;

        .content {
            width: 40%;
            height: 500px;

            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);

            h3 {
                text-align: center;
                font-size: 40px;
                font-weight: normal;
                font-family: 'Exo';
            }

            .quote {
                position: relative;
                font-size: 26px;
                font-weight: bold;
                width: 80%;
                margin: auto;
                margin-top: 100px;
                font-family: 'PT Sans';

                span {
                    position: absolute;
                    left: -50px;
                    top: -60px;
                    font-size: 150px;
                    z-index: -1;
                    color: #22B8FD;
                }
            }
        }

        .animal {
            width: 175px;
            height: 175px;
            border-radius: 50%;
            box-shadow: 5px 5px 5px rgba(#000000, .5);
            position: absolute;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .animal-0 {
            left: 150px;
            top: 80px;
        }

        .animal-1 {
            left: 100px;
            bottom: 260px;
        }

        .animal-2 {
            left: 350px;
            bottom: 100px;
        }

        

        .animal-3 {
            right: 400px;
            bottom: 100px;
        }
        
        .animal-4 {
            right: 100px;
            bottom: 300px;
        }

        .animal-5 {
            right: 150px;
            top: 100px;
        }

        .rotateWatch {
            animation: rotate 5s infinite linear;
        }

        .rotateAntiWatch {
            animation: antiRotate 5s infinite linear;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg) translate(-10px) rotate(0deg);
            }
            to {
                transform: rotate(360deg) translate(-10px) rotate(-360deg);
            }
        }

        @keyframes antiRotate {
            from {
                transform: rotate(0deg) translate(-10px) rotate(0deg);
            }
            to {
                transform: rotate(-360deg) translate(-10px) rotate(360deg);
            }
        }
    }

    @media screen and (max-width: 400px) {
        section {
            height: 100vh;

            .content {
                h3 {
                    font-size: 25px;
                }

                .quote {
                    font-size: 15px;
                    width: 90%;
                    margin-top: 50px;
                }
            }
            .animal {
                width: 75px;
                height: 75px;
            }

            .animal-0 {
                top: auto;
                bottom: 150px;
                left: 50px;
            }

            .animal-1 {
                top: auto;
                bottom: 125px;
                left: 250px;
            }

            .animal-2 {
                display: none;
            }

            .animal-3 {
                display: none;
            }

            .animal-4 {
                display: none;
            }

            .animal-5 {
                display: none;
            }

        }
    }
</style>


