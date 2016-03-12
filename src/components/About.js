import React from 'react';
import ReactDOM from 'react-dom';

let About = React.createClass({
  render: function() {
    return (
      <div className="app-content">
        <div className="ui vertical stripe segment">
            <h1 className = "ui header">
                About
            </h1>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>

      </div>
    );
  }
});

export default About;
