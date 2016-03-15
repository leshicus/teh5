import React from 'react';
import ReactDOM from 'react-dom';
import { ROOT } from '../constants/Constants';

let TestingSystemGrid = React.createClass({
  componentDidMount: function() {
    $('.menu .item')
      .tab();
  },

  handleMouseOver: function(index, e) {
    let ref = 'img_' + index;
    let el = ReactDOM.findDOMNode(this.refs[ref]);

    $('.' + ref)
      .popup('toggle');
    return;
  },
  handleMouseClick: function(src, index, e) {
    this.src = src;
    this.index = index;

    $('.modal_1.fullscreen.modal').modal((function() {
      let img = ReactDOM.findDOMNode(this.refs.img_modal);
      let modal = ReactDOM.findDOMNode(this.refs.modal_1);
      img.src = src;
      img.onClick = this.handleModalImgClick;
    }).bind(this)());

    $('.modal_1.fullscreen.modal')
      .modal('show');

    // $('#btn').click(function() {
    //  //do something
    //  this.preventDefault();
    // });

    return;
  },

  handleModalImgClick: function() {

  },



  images: [{
    src: ROOT + "image/test/auth.png",
    dc: "Authorization"
  }, {
    src: ROOT + "image/test/reg.png",
    dc: "Registration"
  }, {
    src: ROOT + "image/test/t s.png",
    dc: "Self study"
  }, {
    src: ROOT + "image/test/v q.png",
    dc: "Questions and answers"
  }, {
    src: ROOT + "image/test/v s.png",
    dc: "Specializations"
  }, {
    src: ROOT + "image/test/adm user.png",
    dc: "Users"
  }, {
    src: ROOT + "image/test/adm class.png",
    dc: "Exam organization"
  }, {
    src: ROOT + "image/test/adm stat.png",
    dc: "Statistics of academic progress"
  }],

  className: "sixteen wide mobile eight wide tablet four wide computer column",

  render: function() {
    return (
      <div className="app-content">
        <div className="ui vertical stripe segment">
          <h1 className = "ui header">
            Testing system
          </h1>

          <div className="ui top attached tabular menu">
            <a className="active item" data-tab="screenshots">Screenshots</a>
            <a className="item not-active" data-tab="about">About</a>
          </div>

          <div className="ui bottom attached active tab segment" data-tab="screenshots">
            <div className="ui grid">
              {
                this.images.map((image, index) => {
                  return (
                    <a
                      href="#"
                      className={this.className+` img_`+index}
                      key={`level_${index}`}
                      data-content={image.dc}
                      data-letiation="inverted"
                      data-position="top center"
                      >
                      {<img
                      className="ui image"
                      src={image.src}
                      ref={`img_`+index}
                      onMouseOver={this.handleMouseOver.bind(this, index)}
                      onClick={this.handleMouseClick.bind(this,image.src, index)}
                      />}
                    </a>
                  );
                })
              }
            </div>
          </div>
          <div className="ui bottom attached tab segment" data-tab="about">
            About
          </div>

          <div className="ui modal_1 fullscreen modal" ref="modal_1">
              <img
              src={this.src}
              ref="img_modal"
              width="100%"
              onClick={this.handleModalImgClick}
              />
          </div>
        </div>
      </div>
    );
  }
});

export default TestingSystemGrid;
