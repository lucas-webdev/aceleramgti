const template = `
    <section id="banner" :style="{backgroundImage : imgPath}">
        <h1 id="banner__title">{{title}}</h1>
        <div class="banner__text">{{text}}</div>
        <default-button v-if="showButton" @click.prevent="smoothScroll" buttonType="secondary" :buttonLabel="buttonText" :buttonLink="buttonLink"></default-button>
    </section>
`

import DefaultButton from './default-button.js';

const Banner = Vue.component('Banner', {
    template,
    components: {
        DefaultButton
    },
    props: {
        title: {
            type: String,
            default: 'Titulo do banner'
        },
        text: {
            type: String,
            default: 'Texto do banner'
        },
        imgPath: {
            type: String,
            default: ''
        },
        showButton: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            default: ''
        },
        buttonLink: {
            type: String,
            default: ''
        },
    },
    computed: {
        activeBannerImage() {
            return this.imgPath;
        }
    },
    methods: {
        smoothScroll(anchor) {
            $('html, body').stop().animate({
                scrollTop: $( anchor ).offset().top - 160
            }, 400);
        }
    }
});

export default Banner;
