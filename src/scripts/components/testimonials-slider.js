const template = `
<section id="testimonials_slider" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
        <slot />
    </div>
    <a class="carousel-control-prev" href="#testimonials_slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#testimonials_slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
    </a>
</section>`;

const TestimonialsSlider = Vue.component('testimonials-slider', {
    template,
});

export default TestimonialsSlider;