import DefaultButton from './components/default-button.js';
import BannerSlider from './components/banner-slider.js';
import TwoHalfContainer from './components/half-container.js';
import QuemSomos from './components/quem-somos.js';
import MainMenu from './components/menu.js';
import VerticalBox from './components/vertical-box.js';
import ContactForm from './components/contact-form.js';
import TestimonialsSlider from './components/testimonials-slider.js';
import Testimonial from './components/testimonial.js';

$(function() {
    'use strict';

    new Vue({
        el: '#aceleramgti',
        componets: {
        	MainMenu,
            DefaultButton,
            BannerSlider,
            TwoHalfContainer,
            QuemSomos,
            VerticalBox,
            ContactForm,
            TestimonialsSlider,
            Testimonial
        }
    });
});
