require('../node_modules/san/dist/san.dev.js');
require('./style.css');

import {
	router,
	Link
} from 'san-router';

import hello from './components/hello.san';


router.add({
	rule: '/',
	Component: hello,
	target: '#app'
});

router.start();