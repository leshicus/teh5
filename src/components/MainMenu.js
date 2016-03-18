import React from 'react';
import ReactDOM from 'react-dom';

import { ROOT } from '../constants/Constants';
import FormAutorization from '../components/FormAutorization';
import Home from '../components/Home';
import About from '../components/About';
import CashiersGrid from '../components/CashiersGrid';
import TestingSystemGrid from '../components/TestingSystemGrid';
import VusGrid from '../components/VusGrid';
import WarehouseGrid from '../components/WarehouseGrid';
import TeacherGrid from '../components/TeacherGrid';
import Footer from '../components/Footer';
import PlaygroundJavascript from '../components/PlaygroundJavascript';

let MainMenu = React.createClass({
  componentDidMount: function() {
    if (ROOT == '/') {
      this.handlePortfolioClickCash();
    }
  },

  handleHomeClick: function(e) {
    ReactDOM.render(<Home />, document.getElementById('container-content'));
    return;
  },

  handleAboutClick: function(e) {
    ReactDOM.render(<About />, document.getElementById('container-content'));
    return;
  },

  handlePortfolioClickCash: function(e) {
    ReactDOM.render(<CashiersGrid />, document.getElementById('container-content'));
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

  handlePlaygroundJavascript: function(e) {
    ReactDOM.render(<PlaygroundJavascript />, document.getElementById('container-content'));
    return;
  },

  handleLogoutClick: function() {
    ReactDOM.render(<FormAutorization />, document.getElementById('app'));
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
                  <span><u>Ext JS</u></span>
                </div>
              </div>
              <div className="item" onClick={this.handlePortfolioClickCash}>
                Cashier's workplace
              </div>
              <div className="item" onClick={this.handlePortfolioClickTest}>
                Testing system
              </div>
              <div className="item" onClick={this.handlePortfolioClickVus}>
                Military registration
              </div>
              <div className="item" onClick={this.handlePortfolioClickWarehouse}>
                Warehouse
              </div>
              <div className="item" onClick={this.handlePortfolioClickTeacher}>
                Teachers workload
              </div>
              <div className="divider"></div>

              <div className="ui header">
                <div className="content">
                  <u>Angular JS</u>
                </div>
              </div>
                <div className="disabled item">Kids-club managment</div>
            </div>
          </div>

          <a className="disabled item" >
            <i className="user large icon"></i>
            About
          </a>
          <div className="ui simple dropdown item" >
            {/*<i className="user large icon"></i>*/}
            Playground
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item" onClick={this.handlePlaygroundJavascript}>
                JavaScript
              </div>
            </div>
          </div>
          <a className="item" onClick={this.handleLogoutClick} >
            <i className="sign out large icon"></i>
          Logout
          </a>
        </div> 
        <div id = "container-content" className = "vertical stripe segment container-content"> </div> 
        <div id = "footer" > { /*<Footer />*/ }
          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui horizontal inverted  link list">
                <a className="item" href="#">2016</a>
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
