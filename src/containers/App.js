// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React from 'react';
//import FormAutorization from '../components/FormAutorization';
import MainMenu from '../components/MainMenu';

//class App extends React.Component {
let App = React.createClass({
	//render() {
	render: function() {
		return (
			<MainMenu />
		);
	}
});


export default App;
