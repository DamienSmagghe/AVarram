<template>
    <footer>
        <div class="parts">
            <div class="footer-section">
                <p class="first-content"><span class="section-title">VARRAM</span></p>
                <p>User Sales and support</p>
                <p>Copyright 2016 VARRAM</p>
                <p>SYSTEM Co., Ltd. All rights reserved.</p>
            </div>
            <div class="footer-section">
                <p class="first-content"><span class="section-title">Main</span></p>
                <ul>
                    <li v-for="page in pages"><router-link :to="page.link"><span v-html="page.title"></span></router-link></li>
                </ul>
            </div>
            <div class="footer-section">
                <p class="first-content"><span class="section-title">Contact Us</span></p>
                <p>Office Number: 714.351.8671</p>
                <p>E-mail: master@appbot.co.kr</p>
                <a
                href="https://www.kickstarter.com/projects/varram/a-smart-robot-for-your-pet-varram?lang=fr"
                title="link to the kick starter page"
                target="blank">
                    <button>Help us for our  project</button>
                </a>
            </div>
        </div>
        <div class="footer-socials">
            <a
            href="https://www.kickstarter.com/projects/varram/a-smart-robot-for-your-pet-varram?lang=fr"
            title="link to the kick starter page"
            target="blank"
            class="first-link">
                Help Us
            </a>
            <div class="social-links">
                <a href="https://www.instagram.com/riley_varram/" target="blank" title="Link to the instagram account"><img src="../../../static/img/instagram.svg" alt="Instagram logo"></a>
                <a href="https://www.facebook.com/appbotrileyus/" target="blank" title="Link to the facebook page"><img src="../../../static/img/facebook.svg" alt="Facebook logo"></a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'homeFooter',
    data() {
        return {
            //pages links and name data to loop in DOM
            pages: [
                {
                    title: "Home",
                    link: "/"
                },
                {
                    title: "Product",
                    link: "/product"
                },
                {
                    title: "History",
                    link: "/history"
                },
                
            ],
        }
    },

}
</script>
<style lang="scss" scoped>
    $border-bottom: #22B8FD;

    footer {
        margin-top: 60px;
        background: #707070;
        font-family: 'PT Sans', sans-serif;
        font-size: 18px;
        color: white;
        padding-top: 50px;
        border-top-left-radius: 50% 40px;
        border-top-right-radius: 50% 40px;

        .parts {
            display: flex;
            justify-content: space-between;
            margin: 0 100px 20px 100px;
            position: relative;
            
            .footer-section {

                .first-content {
                    margin-bottom: 30px;
                    .section-title {
                        margin-bottom: 20px;
                        position: relative;

                        &::after {
                            content:"";
                            display: block;
                            z-index: 9999;
                            width: 32px;
                            height: 1px;
                            background: $border-bottom;
                            position: absolute;
                            bottom: 0;
                        }
                    }
                }
                ul {
                    padding: 0;
                    li {
                        list-style: none;
                    }
                }
                p {
                    margin: 0;
                }
                a {
                    button {
                    background: rgba($color: #000000, $alpha: 0);
                    border: 1px solid #22B8FD;
                    color: white;
                    font-family: 'PT Sans', sans-serif;
                    padding: 8px;
                    font-size: 18px;
                    margin-top: 10px;
                    transition: 0.3s ease-in;

                    &:focus {
                        outline: 0;
                    }
                    &:hover {
                        cursor: pointer;
                        background: #22B8FD;
                        color: white;
                    }
                }
                }
            }
        }
        .footer-socials {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;

            &::after {
                content: "";
                display: block;
                width: 100%;
                height: 1px;
                background: $border-bottom;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 0;

            }
            .first-link {
                padding: 0 25px;
            }
            a {
                z-index: 1;
                background: #707070;
            }
            .social-links {
                z-index: 1;
                background: #707070;
                padding: 0 25px;
                img {
                    width: 30px;
                    margin: 0 3px;
                    transition: 0.3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
</style>
