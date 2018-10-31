<template>
    <section>
        <div class="informations">
            <div class="infoContainer">
                <div class="info">
                    <h2 @click="openInfo" data-id="1" :class="{infoOut: show !== '1' && show !== 'all'}"><span data-id="1">Get your pet off the couch.</span></h2>
                    <img src="../../../static/img/sad.png" v-if="show === '1'" alt="sad dog" class="sad" :class="hasToFadeOut">
                    <p v-if="show === '1'" :class="hasToFadeOut">These results indicate an estimated <strong>50.2 million</strong> dogs and<strong> 56.5 million</strong> cats are above <strong>healthy weight</strong>, based on 2017 pet population projections provided by the American <strong>Pet Products Association (APPA).</strong> Pets with obesity are at increased risk for developing serious weight related disorders such as diabetes, arthritis, high blood pressure, kidney disease, cancer, and more.</p>
                    <h2 @click="openInfo" data-id="2" :class="{infoOut: show !== '2' && show !== 'all'}"><span data-id="2">Prevent accidents and messes.</span></h2>
                    <img src="../../../static/img/mess.png" v-if="show === '2'" alt="messy dog" class="mess" :class="hasToFadeOut">
                    <p v-if="show === '2'" :class="hasToFadeOut">The dogs might urinate, defecate, bark, howl, chew, dig or try to escape. Separation anxiety almost always occurs within the first 20 minutes after you <strong>leave a dog alone.</strong> Leaving a puzzle toy with prizes and treats, that take up to 30 minutes to finish, can help prevent separation anxiety for your dog, while also lessening the risk of accidents and mess.</p>
                    <h2 @click="openInfo" data-id="3" :class="{infoOut: show !== '3' && show !== 'all'}" class="active"><span data-id="3">Keep them active. Reduce their stress.</span></h2>
                    <img src="../../../static/img/active.png" v-if="show === '3'" alt="active dog" class="active" :class="hasToFadeOut">
                    <p v-if="show === '3'" :class="hasToFadeOut">VARRAM Pet Fitness Robot is the best lifelong companion animal. It is a <strong>five stimulus artificial intelligence</strong> robot that uses a snack reward to move a pet. VARRAM Pet Fitness Robot is not just a pretty toy. It is an intelligent robot that can stimulate the five senses of the pet and make the pets <strong>do exercise</strong> without constant experimentation.</p>
                    <div class="backContainer">
                        <div class="back" :class="hasToFadeOut" v-if="show !== 'all'" @click="showAll"><</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="robotContainer">
            <robot class="robot"/>
        </div>
    </section>
</template>

<script>

import Robot from '../robot/robot'

export default {
    name:'informations',
    components: {
        Robot
    },
    data () {
        return {
            show: 'all',
            fadeOut: false
        }
    },
    methods: {
        openInfo(e) {
            this.show = e.toElement.dataset.id
        },
        showAll() {
            this.fadeOut = true
            setTimeout(() => {
                this.show = 'all'
                this.fadeOut = false
            },500)
        }
    },
    computed: {
        hasToFadeOut() {
            return {
                fadeOut: this.fadeOut
            }
        }
    }
}
</script>
<style lang="scss" scoped>

    section {
        
        .informations {
            width: 70%;
            height: 100%;

            .infoContainer {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .info {
                    width: 100%;
                    height: 75%;
                    position: relative;

                    h2 {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translateY(-50%);

                        width: 100%;
                        font-family: 'Exo';
                        text-align: center;
                        cursor: pointer;
                        transition: .3s;

                        span {
                            display: inline-block;
                            width: 50%;
                            margin: auto;
                            text-align: left;
                            background: white;
                            transition: .3s;
                        }   


                        &:first-child {
                            top: 25%;
                            left: 0;
                        }

                        &.active {
                            top: 75%;
                            left: 0;
                        }
                        
                        &::after {
                            content: '';
                            display: block;
                            height: 2px;
                            width: 100%;
                            background: #22b8fd;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(-78%,-50%);
                            z-index: -1;
                            transition: .3s;
                        }

                        &:hover {
                            span {
                                transform: translateX(10px);
                            }

                            &::after {
                                transform: translate(-77%,-50%);
                            }
                        }

                                           &.infoOut {
                    transform: translate(-100%,-50%);
                    transition: 2s;
                }
                    } 

                    p {
                        font-family: 'PT Sans';
                        font-size: 20px;
                        animation: fadeIn 2s;

                        &.fadeOut {
                            animation: fadeOut .5s;
                        }

                    }              

                    img {
                        animation: fadeIn 2s;

                        &.fadeOut {
                            animation: fadeOut .5s;
                        }
                    }

                    img.active {
                        width: 50%;
                        height: auto; 
                        margin-left: 30px; 
                        margin-top: 50px;

                        & + p {
                            display: inline-block;
                            width: 45%;
                            margin-left: 10px;
                        } 
                    } 

                    img.sad {
                        width: 40%;
                        height: auto;
                        margin-top: 20%;

                        & + p {
                            display: inline-block;
                            width: 55%;
                        }
                    }

                    img.mess {
                        display: block;
                        width: 80%;
                        height: auto;
                        margin: auto;
                        margin-top: 50px;

                        & + p {
                            width: 70%;
                            margin: auto;
                            margin-top: 150px;
                        }
                    }

                    .backContainer {
                        width: 100%;
                        text-align: right;

                        .back {
                            display: inline-block;
                            position: relative;
                            width: 30px;
                            height: 30px;
                            
                            margin-right: 50px;
                            border: 2px solid rgba(0, 0, 0,.4);
                            border-radius: 50%;

                            font-size: 20px;
                            text-align: center;
                            line-height: 30px;
                            color: rgba(0, 0, 0,.4);

                            cursor: pointer;
                            overflow: hidden;
                            animation: fadeIn 2s;
                            transition: color .3s;

                            &::after {
                                content: '';
                                display: block;
                                width: 100%;
                                height: 100%;
                                background: rgba(0, 0, 0,.4);

                                position: absolute;
                                left: 0;
                                top: 0;
                                z-index: -1;
                                transform: translateX(-100%);
                                transition: .3s;
                            }

                            &:hover::after{
                                transform: translateX(0);
                            }

                            &:hover {
                                color:white;
                            }

                            &.fadeOut {
                                animation: fadeOut .5s;
                            }
                        }
                    }
                }
            }
            
        }

        .robotContainer {
            position: relative;
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;

            .robot {
                transform: translateX(50%);
            }
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>

