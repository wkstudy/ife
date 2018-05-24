require('../../node_modules/san/dist/san.dev.js');
require('../css/base.css');

import {
	router,
	Link
} from 'san-router';

import grandparent from '../components/grandp.san';


router.add({
	rule: '/',
	Component: grandparent,
	target: '#app'
});

router.start();