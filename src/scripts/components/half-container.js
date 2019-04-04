const template = `
    <section class="half-container">
        <div class="half-container__content" :class="[contentSide, verticalAlignment]">
            <div class="half-container__box" :class="textBoxBgClass">
                <div class="half-container__box__title article-title-font" :class="textAlignment">{{title}}</div>
                <div class="half-container__box__text article-text-font" :class="textAlignment">{{text}}</div>
            </div>
            <default-button class="half-container__button" v-if="showButton" @click.prevent="smoothScroll" buttonType="secondary" :buttonLabel="buttonText" :buttonLink="buttonLink"></default-button>
        </div>
        <div class="half-container__image" :class="imgSide">
            <img :src="imgPath" :alt="imgAlt" :title="imgTitle" />
        </div>
    </section>
`;

import DefaultButton from './default-button.js';

const TwoHalfContainer = Vue.component('TwoHalfContainer', {
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
        textBox: {
            type: Boolean,
            default: true
        },
        textAlignment: {
            type: String,
            default: 'left'
        },
        verticalAlignment: {
            type: String,
            default: 'center'
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
        imgSide: {
            type: String,
            default: 'right'
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
    computed: {
        contentSide() {
            if (this.imgSide === 'right') {
                return 'left';
            }

            return 'right';
        },
        textBoxBgClass() {
            if (this.textBox) {
                return 'white-box';
            }
            return 'no-color';
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

export default TwoHalfContainer;
