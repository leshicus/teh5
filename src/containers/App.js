// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React from 'react';
import FormAutorization from '../components/FormAutorization';
import MainMenu from '../components/MainMenu';
import { ROOT } from '../constants/Constants';

let App;

if (ROOT == '/') {
	App = React.createClass({
		render: function() {
			return (
				<MainMenu />
			);
		}
	});
} else {
	App = React.createClass({
		render: function() {
			return (
				<FormAutorization />
			);
		}
	});
}



export default App;
