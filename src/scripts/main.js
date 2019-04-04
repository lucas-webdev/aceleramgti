import DefaultButton from './components/default-button.js';
import TwoHalfContainer from './components/half-container.js';
import QuemSomos from './components/quem-somos.js';

$(function() {
    'use strict';

    new Vue({
        el: '#aceleramgti',
        componets: {
            DefaultButton,
            TwoHalfContainer,
            QuemSomos
        }
    });
});
