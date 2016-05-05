import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import { ROOT } from '../constants/Constants';

const projectFolder = "minicart";

let Minicart = React.createClass({
  componentDidMount: function() {
    $('.menu .item')
      .tab();
    $('.ui.embed').embed();
  },
  render: function() {

    return (
      <div className="app-content">
        <div className = "ui vertical stripe segment">
          <h1 className = "ui header">
            <div className="content">
              Mini cart widget
            </div>
          </h1>

          <div className="ui top attached tabular menu">
            <a className="active item" data-tab="online">Online demo</a>
            <a className="item not-active" data-tab="screenshots" disabled>Screenshots</a>
            <a className="item" data-tab="about">About</a>
          </div>
          <div className="ui bottom attached active tab segment" data-tab="online">
            <div className="ui embed" data-url={ROOT+projectFolder} data-placeholder={ROOT+"image/"+"embed.png"}  data-icon="video play icon">
            </div>
          </div>
          <div className="ui bottom attached tab segment" data-tab="screenshots">
            Screenshots
          </div>
          <div className="ui bottom attached tab segment" data-tab="about">
            <p>Cart widget for internet shop.</p>
            <p><b>Technical environment:</b> Ext JS 6.</p>
          </div>

        </div>
      </div>
    );
  }
});

export default Minicart;
