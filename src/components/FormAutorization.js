import React from 'react';
import ReactDOM from 'react-dom';

import MainMenu from '../components/MainMenu';
//var $ = require("jquery");

let FormAutorization = React.createClass({
	getInitialState: function() {
		return {
			login: 1,
			password: 1
		};
	},

	componentDidMount: function() {

	},


	handleClick: function() {
		let login = ReactDOM.findDOMNode(this.refs.log).value;
		let password = ReactDOM.findDOMNode(this.refs.pass).value;

		if (login == this.getInitialState().login && password == this.getInitialState().password) {
			//console.log(<MainMenu />);
			ReactDOM.render(<MainMenu />, document.getElementById('app'));
			//ReactDOM.render(<Footer />, document.getElementById('footer'));

		}
	},

	handlePasswordClick: function(e) {
		//console.log(e);
		if (!e) e = window.event;
		let keyCode = e.keyCode || e.which;
		if (keyCode == '13') {
			this.handleClick();
			return false;
		}
	},

	handleLoginClick: function(e) {
		//console.log(e);
		if (!e) e = window.event;
		let keyCode = e.keyCode || e.which;
		if (keyCode == '13') {
			ReactDOM.findDOMNode(this.refs.pass).focus();
			return false;
		}
	},

	render: function() {
		return (
			<div className="ui middle aligned center aligned grid">
				<div className="four wide column">
					<h2 className="ui teal image header">

						<div className="content">
							Authorization
						</div>
					</h2>
					<form className="ui form">
						<div className="ui segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="login" placeholder="Login: 1" autoFocus={true} ref="log" onKeyPress={this.handleLoginClick}/>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input type="password" name="password" placeholder="Password: 1" ref="pass"  onKeyPress={this.handlePasswordClick}/>
								</div>
							</div>
							<div className="ui fluid teal submit button" onClick={this.handleClick} >
								Login
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
});


export default FormAutorization;
