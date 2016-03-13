import React from 'react';
import ReactDOM from 'react-dom';

import FormAutorization from '../components/FormAutorization';
import Home from '../components/Home';
import About from '../components/About';
import CashiersGrid from '../components/CashiersGrid';
import TestingSystemGrid from '../components/TestingSystemGrid';
import VusGrid from '../components/VusGrid';
import WarehouseGrid from '../components/WarehouseGrid';
import TeacherGrid from '../components/TeacherGrid';
import Footer from '../components/Footer';

let MainMenu = React.createClass({
  componentDidMount: function() {
    // $('.ui.dropdown')
    //  .dropdown();
    this.handleHomeClick();
  },

  handleHomeClick: function(e) {
    ReactDOM.render(<Home />, document.getElementById('container-content'));
    return;
  },

  handleAboutClick: function(e) {
    ReactDOM.render(<About />, document.getElementById('container-content'));
    return;
  },

  handlePortfolioClick1: function(e) {
    ReactDOM.render(<CashiersGrid />, document.getElementById('container-content'));
    //$('.ui.embed').embed({ "icon": "video play icon" });
    return;
  },

  handlePortfolioClickTest: function(e) {
    ReactDOM.render(<TestingSystemGrid />, document.getElementById('container-content'));
    return;
  },

  handlePortfolioClickVus: function(e) {
    ReactDOM.render(<VusGrid />, document.getElementById('container-content'));
    return;
  },

  handlePortfolioClickWarehouse: function(e) {
    ReactDOM.render(<WarehouseGrid />, document.getElementById('container-content'));
    return;
  },

  handlePortfolioClickTeacher: function(e) {
    ReactDOM.render(<TeacherGrid />, document.getElementById('container-content'));
    return;
  },

  handleLogoutClick: function() {
    ReactDOM.render(<FormAutorization />, document.getElementById('app'));
    //ReactDOM.unmountComponentAtNode(document.getElementById('container-content'));
    // ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
  },

  render: function() {

    return (
      <div className="app">
        <div className="ui fixed menu">
          <div className="header item">
            Alexey Volkov
          </div>
          <a className="disabled item">
            <i className="building outline large icon"></i>
            Home
          </a>
          <div className="ui simple dropdown item" >
            <i className="camera retro large icon"></i>
            Portfolio
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="ui header" >
                <div className="content">
                  {/*<img className="ui mini image" src="sencha2.jpeg"/>*/}
                  {/*<i className="ui folder outline large icon"></i>*/}
                  <span>Ext JS</span>
                </div>
              </div>
              <div className="item" onClick={this.handlePortfolioClick1}>
                <i className="ui record icon"></i>
                Cashier's workplace
              </div>
              <div className="item" onClick={this.handlePortfolioClickTest}>
                <i className="ui photo icon"></i>
                Testing system
              </div>
              <div className="item" onClick={this.handlePortfolioClickVus}>
                <i className="ui photo icon"></i>
                Military registration
              </div>
              <div className="item" onClick={this.handlePortfolioClickWarehouse}>
                <i className="ui photo icon"></i>
                Warehouse
              </div>
              <div className="item" onClick={this.handlePortfolioClickTeacher}>
                <i className="ui photo icon"></i>
                Teachers workload
              </div>
              <div className="divider"></div>

              <div className="ui header">
                <div className="content">
                  {/*<img className="ui mini image" src="angularjs.png"/>*/}
                  {/*<i className="ui folder outline large icon"></i>*/}
                  Angular JS
                </div>
              </div>
                <div className="disabled item">Kids-club managment</div>
            </div>
          </div>

          <a  className="disabled item">
            <i className="user large icon"></i>
            About
          </a>
          <a className="item" onClick={this.handleLogoutClick} >
            <i className="sign out large icon"></i>
          Logout
          </a>
        </div>
        <div id = "container-content" className="vertical stripe segment container-content"> </div>
        <div id = "footer" >
          {/*<Footer />*/}
          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui horizontal inverted  link list">
                <a className="item" href="http://teh5.ru">teh5.ru</a>
              </div>
              <div className="ui right floated horizontal inverted  list">
                <div className="disabled item">Made with:</div>
                <div className="item">React + Semantic UI + Webpack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default MainMenu;
