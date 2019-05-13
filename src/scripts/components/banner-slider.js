const template = `
<section id="banner_slider" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
        <slot />
    </div>
    <a class="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
    </a>
</section>`;

const BannerSlider = Vue.component('banner-slider', {
    template,
    mounted () {
        // this.startRotation();
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

export default BannerSlider;