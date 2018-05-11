require('../../node_modules/san/dist/san.dev.js');
require('../css/base.css');

import {
	router,
	Link
} from 'san-router';

import list from '../components/list.san';


router.add({
	rule: '/',
	Component: list,
	target: '#biao'
});

router.start();