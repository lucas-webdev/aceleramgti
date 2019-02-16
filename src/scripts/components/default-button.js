const DefaultButton = Vue.component('DefaultButton', {
    template: `<a :href="buttonLink" class="default-button" :class="buttonClass" :target="buttonTarget">{{buttonLabel}}</a>`,
    props: {
        buttonType: {
            type: String,
            default: 'primary'
        },
        buttonLabel: {
            type: String,
            default: 'Saiba mais'
        },
        buttonLink: {
            type: String,
            default: '#'
        },
        buttonTarget: {
            type: String,
            default: '_self'
        }
    },
    computed: {
        buttonClass() {
            return `default-button--${this.buttonType}`;
        }
    }
});

export default DefaultButton;