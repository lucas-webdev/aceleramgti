const template = `
<section id="banner_slider">
    <slot>
</section>;
`

const BannerContainer = Vue.component('BannerSlider', {
    template,
    mounted () {
        this.startRotation();
    },
    computed: {
        currentBanner() {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    },
    methods: {
        startRotation() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next() {
            this.currentIndex += 1
        },
        prev() {
            this.currentIndex -= 1
        }
    },
});