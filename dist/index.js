function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var classnames = _interopDefault(require('classnames'));

var styles = {"test":"_3ybTi"};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Materials = {
  page: 'bg-white'
};

function resolveClassNames(props) {
  var classes = [];
  if (props.p) classes.push("p-" + props.p);
  if (props.pl) classes.push("pl-" + props.pl);
  if (props.pr) classes.push("pr-" + props.pr);
  if (props.pt) classes.push("pt-" + props.pt);
  if (props.pb) classes.push("pb-" + props.pb);
  if (props.py) classes.push("py-" + props.py);
  if (props.px) classes.push("px-" + props.px);

  if (props.flex || (props === null || props === void 0 ? void 0 : props.display) === 'flex') {
    classes.push('flex');
  }

  if (props.material) classes.push(Materials[props.material]);
  if (props.tw) classes.push(classnames(props.tw));
  return classnames(classes);
}

function Box(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "component"]);

  return React.createElement("div", {
    className: resolveClassNames(rest)
  }, children);
}

function resolvePrefixes(prop, resolver) {
  if (typeof prop === 'string' || typeof prop === 'number') {
    return resolver(prop);
  }

  var prefixes = ['', 'sm:', 'md:', 'lg:', 'xl:'];
  var classes = [];

  if (!('length' in prop)) {
    throw new Error('Invalid prop passed');
  }

  var length = prop.length;

  for (var i = 0; i < length; i++) {
    classes.push("" + prefixes[i] + resolver(prop[i]));
  }

  return classnames(classes);
}

function resolveClassNames$1(props) {
  var classes = [];
  if (props.space) classes.push(resolvePrefixes(props.space, function (amt) {
    return "space-y-" + amt;
  }));
  if (props.divide) classes.push('divide-y');
  return classnames(classes);
}

function Stack(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement("div", {
    className: resolveClassNames$1(rest)
  }, children);
}

function useForm(fields) {
  var _useState = React.useState({}),
      formData = _useState[0],
      setFormData = _useState[1];

  var props = Object.keys(fields).reduce(function (st, key) {
    var _extends3;

    var field = fields[key];
    var current = {
      id: key,
      type: field.type,
      onChange: function onChange(val) {
        var _extends2;

        return setFormData(_extends({}, formData, (_extends2 = {}, _extends2[key] = val, _extends2)));
      },
      value: formData[key]
    };
    return _extends({}, st, (_extends3 = {}, _extends3[key] = current, _extends3));
  }, {});
  return {
    data: formData,
    props: props
  };
}

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text, React.createElement("div", {
    className: "text-red-400"
  }, "hi"), React.createElement("div", null, "Hi there"));
};

exports.Box = Box;
exports.ExampleComponent = ExampleComponent;
exports.Stack = Stack;
exports.useForm = useForm;
//# sourceMappingURL=index.js.map
