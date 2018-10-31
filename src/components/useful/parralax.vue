<template>
<div>
    <slot></slot>
</div>
    
</template>
<script>

export default {
    name: 'parralax',
    props: {
        parent: {
            type: String,
            default: '#container'
        },
        parentSpeed: {
            type: Number,
            default: -20
        },
        childrenSpeed: {
            type: Number,
            default: -20
        }
    },
    methods: {
        offset(elt) {
            let rect = elt.getBoundingClientRect(), bodyElt = document.body;
            return {
                top: rect.top + bodyElt.scrollTop,
                left: rect.left + bodyElt.scrollLeft
            }
        },
        parallaxIt(e, target, movement) {
            let that = document.querySelector(this.parent);
            let relX = e.pageX - this.offset(that).left;
            let relY = e.pageY - this.offset(that).top;

            this.$TwinLite.to(target, 1, {
                x: (relX - that.offsetWidth / 2) / that.offsetWidth  * movement,
                y: (relY - that.offsetHeight / 2) / that.offsetHeight * movement
            });
        },
        runParralax(e) {
            this.parallaxIt(e, ".parralax", this.childrenSpeed);
            this.parallaxIt(e, this.parent, this.parentSpeed);
        }
    },
    mounted () {
        this.container = document.querySelector(this.parent)

        this.container.addEventListener('mousemove', this.runParralax)
    }
}
</script>

