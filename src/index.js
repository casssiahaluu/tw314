import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeFirebase } from './push-notification';

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
	await imagemin(['assets/*.{jpg,png}'], {
		destination: 'build/images',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Images optimized');
})();

ReactDOM.render(<App />, document.getElementById('root'));

initializeFirebase();
