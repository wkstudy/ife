require('../node_modules/san/dist/san.dev.js');
require('./style.css');

import {
	router,
	Link
} from 'san-router';

import infor from './components/infor.san';


router.add({
	rule: '/',
	Component: infor,
	target: '#haha'
});

router.start();