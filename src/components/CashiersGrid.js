import React from 'react';
import ReactDOM from 'react-dom';

let CashiersGrid = React.createClass({
  render: function() {
    return (
      <div className="app-content">
        <div className = "ui vertical stripe segment">
          <div className="ui two column doubling grid" style={{"maxHeight": "80px"}}>
            <div className="six wide column">
            <h1 className = "ui header">
              <i className="soccer icon"></i>
              <div className="content">
                Cashier's workplace
              </div>
            </h1>
            </div>
            <div className="column">
            <h1 className = "ui header">
              <div className="content">
                <div className="sub header">The project was dedicated to develop a program for providing an activity of cashiers in a bookmaker club</div>
              </div>
            </h1>
            </div>
          </div>  

          <div className="ui embed" data-url="http://www.teh5.ru/portfolio/pos" data-placeholder="https://www.sencha.com/wp-content/themes/sencha/images/logo.svg"  >
            
          </div>
        </div>
      </div>
    );
  }
});

export default CashiersGrid;
