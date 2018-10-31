<template>
    <section>
        <h2 class="title">What's in the box ?</h2>
        <div class="boxContainer">
            <div class="accessories">
                    <div class="bubble croquettes parralax"><img src="../../../static/img/croquettes.png" alt="croquettes"></div>
                    <div class="bubble feather parralax"><img src="../../../static/img/feather.png" alt="cat feather"></div>
                    <div class="bubble usb parralax"><img src="../../../static/img/usb.png" alt="usb"></div>
                    <div class="bubble otherCroquettes parralax"><img src="../../../static/img/otherCroquettes.png" alt="croquettes"></div>
            </div>
            <div class="informations">
                <h3>Different colors</h3>
                <img src="../../../static/img/Colors.png" alt="colors">
                <div class="price">
                    <span>Starting from</span>
                    <span>$79</span>
                </div>
            </div>
        </div>
        <parallax parent=".boxContainer" :parentSpeed="0" :childrenSpeed="-20"/>

    </section>
</template>

<script>

import Parallax from '../useful/parralax'

export default {
    name: 'box',
    components: {
        Parallax
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        color: black;
    }

    .boxContainer {
        width: 100%;
        height: calc(100% - 50px);
        display: flex;

        .accessories {
            width: 50%;
            height: 100%;
            position: relative;

            .bubble {
                width: 200px;
                height: 200px;
                background: white;
                border-radius: 50%;
                box-shadow: 5px 5px 20px rgba(0, 0, 0,.5);
                position: absolute;

                
                img {
                    height: 50%;
                    width: auto;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
                &.croquettes {
                    left: 10%;
                    top: 15%;
                }

                &.feather {
                    left: 50%;
                    top: 25%;
                }

                &.usb {
                    left: 20%;
                    bottom: 20%;
                }

                &.otherCroquettes {
                    right: 10%;
                    bottom: 10%;
                }
        }
    }

    .informations {
        position: relative;
        width: 50%;
        height: 100%;

        display:  flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            text-align: center;
            font-family: 'Exo';
            font-size: 35px;
            font-weight: normal;
        }

        img {
            height: auto;
            width: 80%;
        }
        .price {
            width: 150px;
            height: 150px;
            background: #22B8FD;
            border-radius: 50%;

            position: absolute;
            bottom: 10%;
            left: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;

            span {
                font-size: 20px;

                &:last-child {
                    font-size: 30px;
                }
            }
        }
    }
}
</style>


