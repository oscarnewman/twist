var React = require('react');

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text, React.createElement("div", {
    className: 'text-red-400'
  }, "hi"), React.createElement("div", null, "Hi there"));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
