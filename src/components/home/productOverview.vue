<template>
    <section>
        <h2 class="title">Don’t let your pet alone anymore</h2>
        <div class="functionnalities">
            <div class="main-functions">
                <ul>
                    <li>
                        <div class="function">
                            <img src="../../../static/img/clock.svg" alt="Clock" class="logo">
                            <span>Set treat time. Anytime</span>
                        </div>
                    </li>
                    <li>
                        <div class="function">
                            <img src="../../../static/img/hammer.svg" alt="Hammer" class="logo">
                            <span>Extremely resistant</span>
                        </div>
                    </li>
                    <li>
                        <div class="function">
                            <img src="../../../static/img/waterdrop.svg" alt="Drop of water" class="logo">
                            <span>Easy to wash</span>
                        </div>
                    </li>
                    <li>
                        <div class="function">
                            <img src="../../../static/img/battery.svg" alt="Battery" class="logo">
                            <span>10h autonomy</span>
                        </div>
                    </li>  
                </ul>
            </div>
            <hr>
            <div class="app-functions">
                <div class="iphone">
                    <img src="../../../static/img/iphone.png" alt="Iphone mockup">
                </div>
                <h4>Download it now</h4>
                <div class="downloads">
                    <a href="https://www.apple.com/fr/ios/app-store/" target="blank" title="Link to app Store app"><img src="../../../static/img/appstore.png" alt="App store logo"></a>
                    <a href="https://store.google.com/" title="Link to google play store app" target="blank"><img src="../../../static/img/googleplay.png" alt="Google play logo"></a>
                </div>  
            </div>
        </div>
        <div class="btn">
            <router-link class="button" to="/product" title="Link to the product page">Learn more</router-link>
        </div>
    </section>
</template>
<script>

export default {
    name: 'product-overview'
}
</script>
<style lang="scss" scoped>
    section {
        margin-top: 40px;
        font-family: 'Exo', sans-serif;
        background-image: url('../../../static/img/bubulles.svg');
        background-position: bottom;
        background-repeat: no-repeat;
            .btn {
                text-align: center;
            }
            .button {
                    color: #22B8FD;
                    background: white;
                    font-family: 'Exo', sans-serif;
                    font-size: 26px;
                    border: 1px solid #22B8FD;
                    border-radius: 40px;
                    padding: 20px 40px;
                    position: relative;
                    transition: .3s;

                    &:hover {
                        background: #22B8FD;
                        color: white;
                    }
                }
                
        .functionnalities  {
            display: flex;
            justify-content: space-between;
            align-items: center;

            hr {
                height: 520px;
                color: #707070;
            }

            .main-functions {
                margin-left: 10vw;

                ul {
                    li {
                        list-style: none;
                        .function {
                            margin-bottom: 50px;
                            display: flex;
                            align-items: center;
                            img {
                                width: 65px;
                                margin-right: 60px;
                            }
                            span {
                                font-size: 40px;
                                transition: 0.3s ease-in;
                                -webkit-transition: 0.3s ease-in;

                                &:hover {
                                    color: #22B8FD;
                                    cursor: pointer;
                                }
                            }
                        }
                        
                    }
                }

            }
            .app-functions {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 10vw;

                .iphone {
                    img {
                        height: 500px;
                    }
                }
                .downloads {
                    img {
                        height: 60px;
                        transition: transform 0.3s;
                        
                        &:hover {
                            transform: scale(1.05)
                        }
                    }
                }
                h4 {
                    font-size: 30px;
                    margin: 40px 0 0 0;
                }
            }
        }
    }

    @media screen and (max-width: 400px) {
            section {
                height: auto;
                margin-top: 40px;
                font-family: 'Exo', sans-serif;
                background-image: url('../../../static/img/bubulles.svg');
                background-position: 0 400px;
                background-repeat: no-repeat;

                .btn {
                    margin-top: 40px;
                }

                h2 {
                    font-size: 40px;
                    text-align: center;
                }

                .functionnalities  {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    align-items: center;

                    hr {
                        display: none;
                    }

                    .main-functions {
                        margin-left: 10vw;

                        ul {
                            transform: translateY(30px);
                            li {
                                .function {
 
                                    img {
                                        width: 50px;
                                        margin-right: 40px;
                                    }
                                    span {
                                        font-size: 20px;
                                    }
                                }
                                
                            }
                        }

                    }
                    .app-functions {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 10vw;

                        .iphone {
                            width: 80%;
                            margin: auto;
                        }
                        .downloads {
                            width: 80%;
                            margin: auto;
                            
                            img {
                                height: 60px;
                                transition: transform 0.3s;
                                
                                &:hover {
                                    transform: scale(1.05)
                                }
                            }
                        }
                        h4 {
                            font-size: 30px;
                            margin: 40px 0 0 0;
                        }
                    }
                }
            }

    }
</style>


