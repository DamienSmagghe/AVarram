<template>
    <main>
        <informations/>
        <features/>
        <box/>
        <home-footer></home-footer>
    </main>
</template>
<script>
import Informations from './informations'
import Features from './features'
import Box from './box'
import HomeFooter from '../home/homeFooter'

export default {
    name: 'product',
    components: {
        Informations,
        Features,
        Box,
        HomeFooter
    }
}
</script>
