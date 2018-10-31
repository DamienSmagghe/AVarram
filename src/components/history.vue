<template>
    <main>
        <h2>Our story</h2>
        <div class="top-left">
            <h3>A'Varram is the last one of our robot</h3>
            <p>
                Based on the <strong>creative ideas</strong> and experiences of the robot development over the last <strong>10 years</strong>, we made a robot that include all the necessary skills with affordable price.
            </p>
        </div>
        <div class="row">
            <div data-aos="fade-right" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2008.png" alt="Varram company logo" class="backgroundPicture rightBackgroundPicture"></div>
            <div class="dot">
                <div class="date" data-aos="fade-right" data-aos-offset="50" data-aos-once="true">
                    <h4>2008</h4>
                    <p><strong>Launch</strong> of the brand</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2010.png" alt="1 sign" class="backgroundPicture one"></div>
            <div class="dot">
                <div class="date oddDate" data-aos="fade-left" data-aos-offset="50" data-aos-once="true">
                    <h4>2010</h4>
                    <p><strong>First</strong> robot, le CTS DRC</p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2012.jpg" alt="Varram camera robot brain" class="backgroundPicture leftBackgroundPicture"></div>   
            <div class="dot">
                <div class="date" data-aos="fade-right" data-aos-offset="50" data-aos-once="true">
                    <h4>2012</h4>
                    <p>Launch of the Second robot, <strong>the Camera Robot brain</strong> </p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2013.png" alt="Augmented reality robot" class="backgroundPicture rightBackgroundPicture"></div>
            <div class="dot">
                <div class="date oddDate" data-aos="fade-left" data-aos-offset="50" data-aos-once="true">
                    <h4>2013</h4>
                    <p><strong>Augmented reality</strong> Robot</p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2015.jpg" alt="Augmented reality robot" class="backgroundPicture leftBackgroundPicture"></div>
            <div class="dot">
                <div class="date" data-aos="fade-right" data-aos-offset="50" data-aos-once="true">
                    <h4>2015</h4>
                    <p>Appbot Link “The world first CCTV robot”</p>
                </div>
            </div>
            <div class="dot">
                <div class="date oddDate" data-aos="fade-left" data-aos-offset="50" data-aos-once="true">
                    <h4>2016</h4>
                    <p>Appbot Riley, Launching the first prototype</p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2017.jpg" alt="Appbot Riley " class="backgroundPicture leftBackgroundPicture"></div>
            <div class="dot">
                <div class="date" data-aos="fade-right" data-aos-offset="50" data-aos-once="true">
                    <h4>2017</h4>
                    <p>Finishing the <strong>first prototype VARRAM pet bot</strong></p>
                    <p><strong>Design changed</strong> to improve robot resistance</p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="50" data-aos-once="true"><img src="../../static/img/2018.png" alt="Varram pet fitness robot" class="backgroundPicture rightBackgroundPicture"></div>
            <div class="dot">
                <div class="date oddDate" data-aos="fade-left" data-aos-offset="50" data-aos-once="true">
                    <h4>2018</h4>
                    <p><strong>Finishing</strong> the second prototype <strong>A'VARRAM pet bot</strong></p>
                    <p><strong>Launching</strong> the kickstarter for <strong>the A'VARRAM pet bot</strong></p>
                </div>
            </div>
        </div>
        <div class="helpAsking">
            <div class="dottedRow"></div>
            <div class="arrow"></div>
            <p>But you can change our destiny </p>
            <p>Now help us continue this beautiful adventure !</p>
            <a href="https://www.kickstarter.com/projects/varram/a-smart-robot-for-your-pet-varram?ref=discovery&term=varram" title="Link to the kickstarter page" target="blank">Kickstarter</a>
        </div>
        <home-footer></home-footer>
    </main>
</template>
<script>
import HomeFooter from './home/homeFooter'
export default {
    name: 'history',
    components: {
        HomeFooter
    }
}
</script>
<style lang="scss" scoped>
main {
    position: relative;
    margin-top: 160px;
    background-image: url('../../static/img/bubullesbackground.svg');
    background-size: cover;
    background-position: top;

    .dottedRow {
        position: absolute;
        top: -200%;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        border-left: 1px dashed #22B8FD;
        height: 340px;
    }
    .arrow {
            width: 20px;
            height: 20px;

            border-bottom: 3px solid #22B8FD;
            border-left: 3px solid #22B8FD;
            border-radius: 3px;
    
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%) rotate(-45deg);
    }
    h2 {
        text-align: center;
        font-size: 40px;
        margin-bottom: 40px;
    }
    .top-left {
        font-family: 'Exo', sans-serif;
        padding-left: 50px;
        h3 {
            font-size: 26px;
        }
        p {
            background: rgba($color: #22B8FD, $alpha: 0.25);
            padding: 40px;
            width: 12%;
            font-size: 18px;
        }
    }
    .row {
        height: 300vh;
        width: 3px;
        margin: 0 auto;
        background: #22B8FD;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-family: 'Exo', sans-serif;
        position: relative;
        transform: translateY(-11%);

        .one {
            width: 300px !important;
            right: -100px;
        }
        .leftBackgroundPicture {
            right: 25vw;
        }
        .rightBackgroundPicture {
            left: 25vw;
        }
        .backgroundPicture {
            position: absolute;
            opacity: 0.15;
            z-index: -1;
            width: 800px;
        }
        .date {
            width: 360px;
            position: absolute;
            text-align: right;
            right: 40px;
            transform: translateY(-50%);
            h4 {
                color: #22B8FD;
                font-size: 80px;
                font-weight: bold;
                margin: 0;
            }
            p {
                margin: 0 0 20px 0;
                font-size: 24px;
            }
        }
        .oddDate {
            text-align: left;
            left: 40px;
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #22B8FD;
        }
    }
    .helpAsking {
        font-family: 'Pt Sans', sans-serif;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        position: relative;
        p {
            margin: 0;
        }
        a {
            padding: 20px 50px;
            font-size: 26px;
            border-radius: 60px;
            display: inline-block;
            margin-top: 60px;
            transition: 0.2s ease-in;
            background: #169D75;
            color: white;
            box-shadow: 1px 1px 6px grey;

            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>

