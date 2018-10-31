<template>
    <main>
        <landing></landing>
        <donnation-btn></donnation-btn>
        <product-home></product-home>
        <product-overview></product-overview>
        <quote></quote>
        <team></team>
        <home-footer></home-footer>
    </main>
</template>
<script>

import Landing from './landing'
import ProductHome from './product'
import ProductOverview from './productOverview'
import Quote from './quote'
import HomeFooter from './homeFooter'
import Team from './team'
import DonnationBtn from './donnationBtn'

export default {
    name: 'home',
    components: {
        Landing,
        ProductHome,
        ProductOverview,
        Quote,
        HomeFooter,
        Team,
        DonnationBtn
    }
}
</script>
