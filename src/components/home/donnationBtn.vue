<template>
    <div class="donnationBtn">
        <a data-aos="fade-left" data-aos-offset="950" href="https://www.kickstarter.com/projects/varram/a-smart-robot-for-your-pet-varram" target="blank" title="link to kickstarter">Make a donation
</a>
    </div>
</template>
<script>
export default {
    name: 'donnation-btn'
}
</script>
<style lang="scss" scoped>
    a {
        padding: 10px 30px;
        background: #2DA783;
        color: white;
        font-size: 24px;
        border-radius: 30px;
        font-family: 'Exo', sans-serif;
        transition: 0.3s ease-in;
        position: fixed;
        top: 40px;
        right: 40px;
        z-index: 10;

        &:hover {
            opacity: 0.7;
        }
    }

</style>

