import { createElement } from 'react';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text, createElement("div", {
    className: 'text-red-400'
  }, "hi"), createElement("div", null, "Hi there"));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
