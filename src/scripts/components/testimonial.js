const template = `
<div class="testimonials">
   <div class="testimonials__text">{{testimonialText}}</div>
   <div class="testimonials__image">
    <img :src="testimonialImage"
    <div class="testimonial__name">{{testimonailName}}</div>
    <div class="testimonial__company">{{testimonalCompany}}</div>
   </div>
</div>`;

const TestimonialsSlider = Vue.component('testimonials-slider', {
    template,
    props: {
        testimonialText: {
            type: String,
            default: ''
        },
        testimonialImage: {
            type: String,
            default: ''
        },
        testimonailName: {
            type: String,
            default: ''
        },
        testimonalCompany: {
            type: String,
            default: ''
        }
    }
});

export default Testimonial;