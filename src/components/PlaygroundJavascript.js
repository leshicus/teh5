import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';

const codeProto =
  'var animal = {\n' +
  '  eats: true\n' +
  '};\n' +
  'var rabbit = {\n' +
  '  jumps: true\n' +
  '};\n' +
  'rabbit.__proto__ = animal;\n' +
  '// in rabbit are both properties\n' +
  'alert(rabbit.jumps); // true\n' +
  'alert(rabbit.eats); // true';
const codeHasOwnProperty =
  'var animal = {\n' +
  '  eats: true\n' +
  '};\n' +
  'var rabbit = {\n' +
  '  jumps: true,\n' +
  '  __proto__: animal\n' +
  '};\n' +
  'alert( rabbit.hasOwnProperty("jumps") ); // true: jumps belongs to rabbit\n' +
  'alert( rabbit.hasOwnProperty("eats") ); // false: eats not belongs';
const codeCreateNull = "// Note: you couldn't iterate this object \n" +
  'var data = Object.create(null);\n' +
  'data.text = "Hi";\n' +
  'alert(data.text); // Hi\n' +
  'alert(data.toString); // undefined';

let PlaygroundJavascript = React.createClass({
  render: function() {
    return (
      <div className="app-content">
        <div className="ui vertical stripe segment">
            <h1 className = "ui header">
                Playground - JavaScript
            </h1>
            <div className="ui container">
              <h3 className="ui header">__proto__</h3>
              <Highlight className="monokai_sublime javascript">
                {codeProto}
              </Highlight>

              <h3 className="ui header">hasOwnProperty</h3>
              <Highlight className="monokai_sublime javascript">
                {codeHasOwnProperty}
              </Highlight>

              <h3 className="ui header">Object.create(null)</h3>
              <Highlight className="monokai_sublime javascript">
                {codeCreateNull}
              </Highlight>
            </div>
        </div>

      </div>
    );
  }
});

export default PlaygroundJavascript;
