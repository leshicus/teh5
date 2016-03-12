import React from 'react';
import ReactDOM from 'react-dom';

let TeacherGrid = React.createClass({
  componentDidMount: function() {
    $('.menu .item')
      .tab()
    ;
  },

  handleMouseOver: function(index, e) {
    let ref = 'img_' + index;
    let el = ReactDOM.findDOMNode(this.refs[ref]);
    //console.log(ref);
    $('.' + ref)
      .popup('toggle');
    return;
  },
  handleMouseClick: function(src, index, e) {
    this.src = src;
    this.index = index;

    $('.modal_4.fullscreen.modal').modal((function() {
      let img = ReactDOM.findDOMNode(this.refs.img_modal);
      let modal = ReactDOM.findDOMNode(this.refs.modal_4);
      img.src = src;
    }).bind(this)());

    $('.modal_4.fullscreen.modal')
      .modal('show');

    $('.small.modal').modal((function() {
      ReactDOM.findDOMNode(this.refs.img_modal).src = src;
    }).bind(this)());

    $('.small.modal')
      .modal('show');
    return;
  },


  render: function() {
    let images = [{
      src: "image/teacher/main screen.png",
      dc: "Main screen"
    }];
    let className = "sixteen wide mobile eight wide tablet four wide computer column";

    return (
      <div className="app-content">
        <div className="ui vertical stripe segment">
          <h1 className = "ui header">
              Teachers workload
          </h1>

          <div className="ui top attached tabular menu">
            <a className="active item" data-tab="screenshots">Screenshots</a>
            <a className="item" data-tab="about">About</a>
          </div>

          <div className="ui bottom attached active tab segment" data-tab="screenshots">
            <div className="ui grid">
            {
              images.map((image, index) => {
                return (
                  <a
                      href="#"
                      className={className+` img_`+index}
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
            <p>Project was dedicated to development of module which allows to manage teachers workload, to assign classes, groups and hours to lecturers.</p>
          </div>

          <div className="ui modal_4 fullscreen modal" ref="modal_4">
            <img
              src={this.src}
              ref="img_modal"
              width="100%"
            />
          </div>
        </div>

      </div>
    );
  }
});

export default TeacherGrid;
