require('../../node_modules/san/dist/san.dev.js');
require('../css/base.css');

import {
	router,
	Link
} from 'san-router';

import demo from '../components/demo.san';


router.add({
	rule: '/',
	Component: demo,
	target: '#app'
});

router.start();