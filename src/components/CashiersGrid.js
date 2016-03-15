import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
//import Highlight from 'react-fast-highlight';
import { ROOT } from '../constants/Constants';

let CashiersGrid = React.createClass({
  componentDidMount: function() {
    $('.menu .item')
      .tab();
    $('.ui.embed').embed();
  },
  render: function() {
    const suspendEvents = '// preventing call store events\n' +
      'store.suspendEvents();\n' +
      'store.each(function(rec) {\n' +
      '  var _current_second = rec.get("_current_second");\n' +
      '  rec.set("_current_second", _current_second + 1);\n' +
      '});\n' +
      'store.resumeEvents();';
    const suspendLayouts = 'Ext.suspendLayouts();\n' +
      '// creating tables with coefficients- many tables!\n' +
      'Ext.resumeLayouts();';
    return (
      <div className="app-content">
        <div className = "ui vertical stripe segment">
          <h1 className = "ui header">
            <div className="content">
              Cashier's workplace
            </div>
          </h1>

          <div className="ui top attached tabular menu">
            <a className="active item" data-tab="online">Online demo</a>
            <a className="item not-active" data-tab="screenshots" disabled>Screenshots</a>
            <a className="item" data-tab="about">About</a>
          </div>
          <div className="ui bottom attached active tab segment" data-tab="online">
            <div className="ui embed" data-url={ROOT+"pos"} data-placeholder={ROOT+"image/pos_placeholder.png"}  data-icon="video play icon">
            </div>
          </div>
          <div className="ui bottom attached tab segment" data-tab="screenshots">
            Screenshots
          </div>
          <div className="ui bottom attached tab segment" data-tab="about">
            <p>Customer is a company which owns the network of bookmaker clubs, develop slop-machines and games for them, and all the infrastructure software for bookmaker's activity. This software we also offer our partners and provide its further support. There are many modules in bookmaker's information system, and one of them is a cashdesk.</p>
            <p>Using this application cashiers work with customers in clubs. They receive money from clients, make bets for them, pay prize, in case the bet was winning. They also fill personal data, ban unfair players, manage TV panels in club, keep records of money in cashdesk and print reports for management.</p>
            <p>The very heart of application is section Events, which represents the process of making bets. It is very highloaded place, because changing information about houndreds of events and thousands of coefficients comes once a second. It delivered by the Socket.io and grids had to be rerendered timely. To prevent slowliness I used grids with XTemplate, suspended layouts and store events.</p>
              <Highlight className="monokai_sublime">
                {suspendEvents}
              </Highlight>
              <Highlight className="monokai_sublime">
                {suspendLayouts}
              </Highlight>
            <p><b>Technical environment:</b> Ext JS 5, PHP, MySQL, Node.js, Socket.io, SVN.</p>
          </div>

        </div>
      </div>
    );
  }
});

export default CashiersGrid;
