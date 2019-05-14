const template = `
<div class="testimonials">
   <div class="testimonials__text">{{testimonialText}}</div>
   <div class="testimonials__image">
    <img :src="testimonialImage" :alt="testimonialCompany"/>
    <div class="testimonials__name">{{testimonialName}}</div>
    <div class="testimonials__company">{{testimonialCompany}}</div>
   </div>
</div>`;

const Testimonial = Vue.component('testimonial', {
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
        testimonialName: {
            type: String,
            default: ''
        },
        testimonialCompany: {
            type: String,
            default: ''
        }
    }
});

export default Testimonial;