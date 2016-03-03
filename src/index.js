import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import '../vendor/semantic/dist/semantic.css';
import '../vendor/semantic/dist/semantic.js';

// render(
// 	<App />, document.getElementById('app')
// );

ReactDOM.render(<App />, document.getElementById('app'));
