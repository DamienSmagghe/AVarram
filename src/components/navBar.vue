<template>
    <nav v-bind:class="{ home: isActive}">
        <ul>
            <!-- vue loop to diplay links and pages names in the nav-->
            <li v-for="page in pages" :key="page.title"><router-link class="nav-link" :title="page.title" :to="page.link"><span v-html="page.title"></span></router-link></li>
            <!--Special link to the kickstarter that cant be putted in the router links-->
            <li><a href="https://www.kickstarter.com/projects/varram/a-smart-robot-for-your-pet-varram?lang=fr" alt="Kickstarter" class="nav-link" target="blank">Kickstarter</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "navBar",
    data() {
        return {
            //pages and links information to display in the DOM
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
    computed: {
        isActive() {
            return this.$route.name == "Home" //detect if user is on home page and apply the css change
        }
    }
}
</script>
<style lang="scss" scoped>

    $navtext: #707070;
    $border-bottom: #22B8FD;

    //specific styles for the home page nav
    .home {
        background: rgba($color: #000000, $alpha: 0.2);
        border: 1px solid rgba($color: #707070, $alpha: 0.2);
    }
    .home a {
        color: white;
    }
    //nav styles
    nav {
        width: 42%;
        position: absolute;
        right: 0;
        top: 40px;
        border: 1px solid rgba($color: #707070, $alpha: 0);
        z-index: 100;
        ul {
            display: flex;
            justify-content: space-around;
            li {
                list-style: none;
                a {
                    text-decoration: none;
                    color: $navtext;
                    font-size: 20px;
                    font-family: 'Exo', sans-serif;
                }
                .nav-link {
                    position: relative;

                    &::after {
                        content:"";
                        display: block;
                        width: 0px;
                        height: 1px;
                        background: $border-bottom;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        transition: 0.2s;

                    }

                    &:hover::after {
                        width: 32px;
                    }
                }
                .router-link-exact-active {
                    position: relative;

                    &::after {
                        content:"";
                        display: block;
                        width: 32px;
                        height: 1px;
                        background: $border-bottom;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%)
                }
                }
            }
        }
    }
</style>


