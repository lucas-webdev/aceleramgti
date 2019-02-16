import DefaultButton from './components/default-button.js';
import Banner from './components/banner.js'

$(function() {
    'use strict';

    new Vue({
        el: '#aceleramgti',
        componets: {
            DefaultButton,
            Banner
        }
    });
});
