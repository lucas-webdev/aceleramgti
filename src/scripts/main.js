import DefaultButton from './components/default-button.js';
import TwoHalfContainer from './components/half-container.js';
import QuemSomos from './components/quem-somos.js';
import MainMenu from './components/menu.js';
import VerticalBox from './components/vertical-box.js';
import ContactForm from './components/contact-form.js';

$(function() {
    'use strict';

    new Vue({
        el: '#aceleramgti',
        componets: {
        	MainMenu,
            DefaultButton,
            TwoHalfContainer,
            QuemSomos,
            VerticalBox,
            ContactForm
        }
    });
});
