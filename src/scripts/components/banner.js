const template = `
    <section id="banner">
        <div class="banner__content">
            <div class="banner__box">
                <div class="banner__box__title article-title-font">{{title}}</div>
                <div class="banner__box__text article-text-font">{{text}}</div>
            </div>
            <default-button class="banner__button" v-if="showButton" @click.prevent="smoothScroll" buttonType="secondary" :buttonLabel="buttonText" :buttonLink="buttonLink"></default-button>
        </div>
        <div class="banner__image">
            <img :src="imgPath" :alt="imgAlt" :title="imgTitle" />
        </div>
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
        imgAlt: {
            type: String,
            default: ''
        },
        imgTitle: {
            type: String,
            default: ''
        },
        showButton: {
            type: Boolean,
            default: true
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
    methods: {
        smoothScroll(anchor) {
            $('html, body').stop().animate({
                scrollTop: $( anchor ).offset().top - 160
            }, 400);
        }
    }
});

export default Banner;
