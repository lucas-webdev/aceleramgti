import DefaultButton from './components/default-button.js';
import Banner from './components/banner.js';
import QuemSomos from './components/quem-somos.js';

$(function() {
    'use strict';

    new Vue({
        el: '#aceleramgti',
        componets: {
            DefaultButton,
            Banner,
            QuemSomos
        }
    });
});
