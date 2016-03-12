import React from 'react';
import ReactDOM from 'react-dom';

let VusGrid = React.createClass({
  componentDidUpdate: function() {
    //console.log(arguments);
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


    $('.modal_2.fullscreen.modal').modal((function() {
      let img = ReactDOM.findDOMNode(this.refs.img_modal);
      let modal = ReactDOM.findDOMNode(this.refs.modal_2);
      img.src = src;
    }).bind(this)());

    $('.modal_2.fullscreen.modal')
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
      src: "image/vus/main screen.png",
      dc: "Main screen"
    }, {
      src: "image/vus/record edit.png",
      dc: "Editing of the record"
    }];
    let className = "sixteen wide mobile eight wide tablet four wide computer column";

    return (
      <div className="app-content">
      <div className="ui vertical stripe segment">
        <h1 className = "ui header">
          Military registration
        </h1>
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
        <div className="ui modal_2 fullscreen modal" ref="modal_2">
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

export default VusGrid;
