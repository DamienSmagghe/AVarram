<template>
    <div class="logo">
        <img src="../../static/img/logo.png" alt="Logo varram">
    </div>
</template>
<script>
export default {
    name: 'logo',
}
</script>
<style lang="scss" scoped>
    .logo {
        position: absolute;
        top: 60px;
        left: 50px;
        z-index: 1;
        img {
            width: 140px;
        }
    }
</style>
