<template>
    <section>
        <h2 class="title">Features</h2>
        <div class="featuresContainer">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/i0gVA-IE3DU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="list">
                <ul>
                    <li>
                        <img src="../../../static/img/paw.png" alt="paw">
                        <p>Design and size made to fit <strong> all the pets expectations</strong></p></li>
                    <li>
                        <img src="../../../static/img/paw.png" alt="paw">
                        <p>Can make <strong>sounds</strong> to attract the pet</p></li>
                    <li>
                        <img src="../../../static/img/paw.png" alt="paw">
                        <p>Developed with ped behavior experts and <strong>veterinary</strong>, will not scare the pet</p>
                    </li>
                    <li>
                        <img src="../../../static/img/paw.png" alt="paw">
                        <p>Shockproof, tested on <strong>many surfaces</strong></p>
                    </li>
                    <li>
                        <img src="../../../static/img/paw.png" alt="paw"  >
                        <p><strong>Waterproof</strong></p>
                    </li>
                </ul>
            </div>
        </div>
        <parallax parent=".featuresContainer" :parentSpeed="0">
            <img src="../../../static/img/bubbles.svg" alt="bubbles" class="bubbles parralax">
        </parallax>
    </section>
</template>

<script>

import Parallax from '../useful/parralax'
export default {
    name: 'features',
    components: {
        Parallax
    }
}
</script>

<style lang="scss" scoped>
    section{
        background-color: rgba(34,184,253,0.4);
    }

    .titre{
        text-align: center;
    }

    .featuresContainer{
        display: flex;
        width: 100%;
        height: 100vh;
    }

    .video{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        transform: translateY(-100px);

        iframe{
            width: 90%;
            height: 45%;
            margin: auto;
            
        }
    }
    .list{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        
        ul {
            margin: 0;
            padding: 0;
            transform: translateY(-100px);

                li{
                    list-style-type: none;
                    width: 70%;
                    margin: auto;
                    display: flex;
                    justify-content: flex-start;

                        img{
                            width: 60px;
                            height:60px;
                        }

                        p{
                            font-family: 'PT Sans', sans-serif;
                            font-size: 22px;
                            color: white;
                        }
                }
        }
    }


    .bubbles {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: auto;
    }

</style>


