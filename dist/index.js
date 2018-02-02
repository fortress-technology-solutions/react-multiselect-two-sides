/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"PropTypes\",\"commonjs2\":\"prop-types\",\"commonjs\":\"prop-types\",\"amd\":\"prop-types\"}\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22PropTypes%22,%22commonjs2%22:%22prop-types%22,%22commonjs%22:%22prop-types%22,%22amd%22:%22prop-types%22%7D?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/classnames/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(4);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./src/index.jsx\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_./src/index.jsx?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(2);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _utils = __webpack_require__(5);\n\nvar _Filter = __webpack_require__(6);\n\nvar _Filter2 = _interopRequireDefault(_Filter);\n\nvar _List = __webpack_require__(7);\n\nvar _List2 = _interopRequireDefault(_List);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst propTypes = {\n\tavailableFooter: _propTypes2.default.node,\n\tavailableHeader: _propTypes2.default.node,\n\tclassName: _propTypes2.default.string,\n\tclearFilterText: _propTypes2.default.string,\n\tclearable: _propTypes2.default.bool,\n\tdeselectAllText: _propTypes2.default.string,\n\tdisabled: _propTypes2.default.bool,\n\tfilterComponent: _propTypes2.default.func,\n\thighlight: _propTypes2.default.array,\n\tlabelKey: _propTypes2.default.string,\n\tlimit: _propTypes2.default.number,\n\tonChange: _propTypes2.default.func,\n\toptions: _propTypes2.default.array,\n\tplaceholder: _propTypes2.default.string,\n\tsearchable: _propTypes2.default.bool,\n\tselectAllText: _propTypes2.default.string,\n\tselectedFooter: _propTypes2.default.node,\n\tselectedHeader: _propTypes2.default.node,\n\tshowControls: _propTypes2.default.bool,\n\tvalue: _propTypes2.default.array,\n\tvalueKey: _propTypes2.default.string\n};\nconst defaultProps = {\n\tavailableFooter: null,\n\tavailableHeader: null,\n\tclassName: null,\n\tclearFilterText: 'Clear',\n\tclearable: true,\n\tdeselectAllText: 'Deselect all',\n\tdisabled: false,\n\tfilterComponent: null,\n\thighlight: [],\n\tlabelKey: 'label',\n\tlimit: undefined,\n\tonChange: function onChange() {},\n\toptions: [],\n\tplaceholder: '',\n\tsearchable: false,\n\tselectAllText: 'Select all',\n\tselectedFooter: null,\n\tselectedHeader: null,\n\tshowControls: false,\n\tvalue: [],\n\tvalueKey: 'value'\n};\n\nclass MultiselectTwoSides extends _react2.default.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.state = {\n\t\t\tfilterAvailable: '',\n\t\t\tfilterSelected: ''\n\t\t};\n\n\t\tthis.handleClickAvailable = this.handleClickAvailable.bind(this);\n\t\tthis.handleClickSelected = this.handleClickSelected.bind(this);\n\t\tthis.handleClickSelectAll = this.handleClickSelectAll.bind(this);\n\t\tthis.handleClickDeselectAll = this.handleClickDeselectAll.bind(this);\n\t\tthis.handleChangeFilterAvailable = this.handleChangeFilterAvailable.bind(this);\n\t\tthis.handleChangeFilterSelected = this.handleChangeFilterSelected.bind(this);\n\t}\n\n\thandleClickAvailable(value) {\n\t\tthis.props.onChange(this.props.value.concat(value));\n\t}\n\n\thandleClickSelected(value) {\n\t\tconst {\n\t\t\tonChange,\n\t\t\tvalue: currentValue\n\t\t} = this.props;\n\t\tconst newValue = currentValue.slice();\n\n\t\tnewValue.splice(currentValue.indexOf(value), 1);\n\t\tonChange(newValue);\n\t}\n\n\thandleClickSelectAll() {\n\t\tconst {\n\t\t\tlimit,\n\t\t\tonChange,\n\t\t\toptions,\n\t\t\tvalue,\n\t\t\tvalueKey\n\t\t} = this.props;\n\t\tconst previousValue = value.slice();\n\n\t\tconst newValue = options.reduce(function (a, b) {\n\t\t\tif (!b.disabled && previousValue.indexOf(b[valueKey]) === -1) {\n\t\t\t\ta.push(b[valueKey]);\n\t\t\t}\n\t\t\treturn a;\n\t\t}, previousValue);\n\n\t\tlet limitedValue = newValue;\n\t\tif (limit >= 0) {\n\t\t\tlimitedValue = limitedValue.slice(0, limit);\n\t\t}\n\n\t\tlimitedValue.sort();\n\n\t\tonChange(limitedValue);\n\t}\n\n\thandleClickDeselectAll() {\n\t\tthis.props.onChange([]);\n\t}\n\n\tfilterAvailable() {\n\t\tconst {\n\t\t\thighlight,\n\t\t\tlabelKey,\n\t\t\tlimit,\n\t\t\toptions,\n\t\t\tvalue,\n\t\t\tvalueKey\n\t\t} = this.props;\n\t\tconst filtered = options.reduce(function (a, b) {\n\t\t\tif (value.indexOf(b[valueKey]) === -1) {\n\t\t\t\ta.push(b);\n\t\t\t}\n\t\t\treturn a;\n\t\t}, []);\n\n\t\tlet limited = filtered;\n\t\tif (value.length >= limit) {\n\t\t\tlimited = filtered.map(function (item) {\n\t\t\t\treturn Object.assign({}, item, { disabled: true });\n\t\t\t});\n\t\t}\n\n\t\tif (highlight && highlight.length > 0) {\n\t\t\tlimited = limited.map(function (item) {\n\t\t\t\tif (highlight.indexOf(item[valueKey]) > -1) {\n\t\t\t\t\treturn Object.assign({}, item, { highlighted: true });\n\t\t\t\t}\n\t\t\t\treturn item;\n\t\t\t});\n\t\t}\n\n\t\tif (!this.props.searchable) {\n\t\t\treturn limited;\n\t\t}\n\n\t\tconst {\n\t\t\tfilterAvailable: filter\n\t\t} = this.state;\n\t\tif (filter) {\n\t\t\treturn limited.filter(function (a) {\n\t\t\t\treturn (0, _utils.filterByName)(a, filter, labelKey);\n\t\t\t});\n\t\t}\n\n\t\treturn limited;\n\t}\n\n\tfilterActive() {\n\t\tconst {\n\t\t\tlabelKey,\n\t\t\toptions,\n\t\t\tvalue,\n\t\t\tvalueKey\n\t\t} = this.props;\n\t\tconst filtered = options.reduce(function (a, b) {\n\t\t\tif (value.indexOf(b[valueKey]) > -1) {\n\t\t\t\ta.push(b);\n\t\t\t}\n\t\t\treturn a;\n\t\t}, []);\n\n\t\tif (!this.props.searchable) {\n\t\t\treturn filtered;\n\t\t}\n\n\t\tconst { filterSelected: filter } = this.state;\n\t\tif (filter) {\n\t\t\treturn filtered.filter(function (a) {\n\t\t\t\treturn (0, _utils.filterByName)(a, filter, labelKey);\n\t\t\t});\n\t\t}\n\n\t\treturn filtered;\n\t}\n\n\thandleChangeFilterAvailable(filterAvailable) {\n\t\tthis.setState({ filterAvailable });\n\t}\n\n\thandleChangeFilterSelected(filterSelected) {\n\t\tthis.setState({ filterSelected });\n\t}\n\n\trenderFilter(value, onChange) {\n\t\tconst {\n\t\t\tclearFilterText,\n\t\t\tclearable,\n\t\t\tdisabled,\n\t\t\tfilterComponent,\n\t\t\tplaceholder\n\t\t} = this.props;\n\n\t\tif (!filterComponent) {\n\t\t\treturn _react2.default.createElement(_Filter2.default, {\n\t\t\t\tvalue: value,\n\t\t\t\tonChange: onChange,\n\t\t\t\tclearFilterText: clearFilterText,\n\t\t\t\tclearable: clearable,\n\t\t\t\tdisabled: disabled,\n\t\t\t\tplaceholder: placeholder\n\t\t\t});\n\t\t}\n\n\t\treturn _react2.default.createElement(filterComponent, {\n\t\t\tclearFilterText,\n\t\t\tclearable,\n\t\t\tdisabled,\n\t\t\tonChange,\n\t\t\tplaceholder,\n\t\t\tvalue\n\t\t});\n\t}\n\n\trender() {\n\t\tconst {\n\t\t\tavailableFooter,\n\t\t\tavailableHeader,\n\t\t\tclassName,\n\t\t\tdeselectAllText,\n\t\t\tdisabled,\n\t\t\tlabelKey,\n\t\t\tlimit,\n\t\t\toptions,\n\t\t\tsearchable,\n\t\t\tselectAllText,\n\t\t\tselectedFooter,\n\t\t\tselectedHeader,\n\t\t\tshowControls,\n\t\t\tvalue,\n\t\t\tvalueKey\n\t\t} = this.props;\n\n\t\tconst {\n\t\t\tfilterAvailable,\n\t\t\tfilterSelected\n\t\t} = this.state;\n\n\t\tconst componentClassName = 'msts';\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: (0, _classnames2.default)(componentClassName, disabled && `${componentClassName}_disabled`, className) },\n\t\t\tavailableHeader || selectedHeader ? _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'msts__heading' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_available' },\n\t\t\t\t\tavailableHeader\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_selected' },\n\t\t\t\t\tselectedHeader\n\t\t\t\t)\n\t\t\t) : null,\n\t\t\tsearchable ? _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'msts__subheading' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_filter' },\n\t\t\t\t\tthis.renderFilter(filterAvailable, this.handleChangeFilterAvailable)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_filter' },\n\t\t\t\t\tthis.renderFilter(filterSelected, this.handleChangeFilterSelected)\n\t\t\t\t)\n\t\t\t) : null,\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'msts__body' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_available' },\n\t\t\t\t\t_react2.default.createElement(_List2.default, {\n\t\t\t\t\t\toptions: this.filterAvailable(),\n\t\t\t\t\t\tonClick: this.handleClickAvailable,\n\t\t\t\t\t\tdisabled: disabled,\n\t\t\t\t\t\tlabelKey: labelKey,\n\t\t\t\t\t\tvalueKey: valueKey\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\tshowControls ? _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_controls' },\n\t\t\t\t\t_react2.default.createElement('button', {\n\t\t\t\t\t\tclassName: 'msts__control msts__control_select-all',\n\t\t\t\t\t\tonClick: this.handleClickSelectAll,\n\t\t\t\t\t\ttitle: selectAllText,\n\t\t\t\t\t\ttype: 'button',\n\t\t\t\t\t\tdisabled: value.length === options.length || value.length >= limit || disabled\n\t\t\t\t\t}),\n\t\t\t\t\t_react2.default.createElement('button', {\n\t\t\t\t\t\tclassName: 'msts__control msts__control_deselect-all',\n\t\t\t\t\t\tonClick: this.handleClickDeselectAll,\n\t\t\t\t\t\ttitle: deselectAllText,\n\t\t\t\t\t\ttype: 'button',\n\t\t\t\t\t\tdisabled: !value.length || disabled\n\t\t\t\t\t})\n\t\t\t\t) : null,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_selected' },\n\t\t\t\t\t_react2.default.createElement(_List2.default, {\n\t\t\t\t\t\toptions: this.filterActive(),\n\t\t\t\t\t\tonClick: this.handleClickSelected,\n\t\t\t\t\t\tdisabled: disabled,\n\t\t\t\t\t\tlabelKey: labelKey,\n\t\t\t\t\t\tvalueKey: valueKey\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\tavailableFooter || selectedFooter ? _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'msts__footer' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_available' },\n\t\t\t\t\tavailableFooter\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_selected' },\n\t\t\t\t\tselectedFooter\n\t\t\t\t)\n\t\t\t) : null\n\t\t);\n\t}\n}\nexports.default = MultiselectTwoSides;\n\nMultiselectTwoSides.defaultProps = defaultProps;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.jsx\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"filterByName\"] = filterByName;\nfunction filterByName(a, name, labelKey) {\n\treturn a[labelKey].toLowerCase().indexOf(name.toLowerCase()) > -1;\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst propTypes = {\n\tclearFilterText: _propTypes2.default.string.isRequired,\n\tclearable: _propTypes2.default.bool.isRequired,\n\tdisabled: _propTypes2.default.bool.isRequired,\n\tonChange: _propTypes2.default.func.isRequired,\n\tplaceholder: _propTypes2.default.string.isRequired,\n\tvalue: _propTypes2.default.string.isRequired\n};\n\nclass Filter extends _react2.default.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t\tthis.handleClickClear = this.handleClickClear.bind(this);\n\t}\n\n\thandleChange(e) {\n\t\tthis.props.onChange(e.target.value);\n\t}\n\n\thandleClickClear() {\n\t\tthis.props.onChange('');\n\t}\n\n\trender() {\n\t\tconst {\n\t\t\tclearFilterText,\n\t\t\tclearable,\n\t\t\tdisabled,\n\t\t\tplaceholder,\n\t\t\tvalue\n\t\t} = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'msts__filter' },\n\t\t\t_react2.default.createElement('input', {\n\t\t\t\tclassName: 'msts__filter-input',\n\t\t\t\tonChange: this.handleChange,\n\t\t\t\ttype: 'text',\n\t\t\t\tdisabled: disabled,\n\t\t\t\tplaceholder: placeholder,\n\t\t\t\tvalue: value\n\t\t\t}),\n\t\t\tclearable && value && !disabled ? _react2.default.createElement('span', {\n\t\t\t\tclassName: 'msts__filter-clear',\n\t\t\t\tonClick: this.handleClickClear,\n\t\t\t\ttitle: clearFilterText\n\t\t\t}) : null\n\t\t);\n\t}\n}\nexports.default = Filter;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Filter.jsx\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/Filter.jsx?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ListItem = __webpack_require__(8);\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst propTypes = {\n\tdisabled: _propTypes2.default.bool.isRequired,\n\tlabelKey: _propTypes2.default.string.isRequired,\n\tonClick: _propTypes2.default.func.isRequired,\n\toptions: _propTypes2.default.array.isRequired,\n\tvalueKey: _propTypes2.default.string.isRequired\n};\n\nclass List extends _react2.default.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.handleClick = this.handleClick.bind(this);\n\t}\n\n\thandleClick(value) {\n\t\tif (this.props.disabled) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis.props.onClick(value);\n\t}\n\n\trender() {\n\t\tvar _this = this;\n\n\t\tconst {\n\t\t\tlabelKey,\n\t\t\toptions,\n\t\t\tvalueKey\n\t\t} = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t'ul',\n\t\t\t{ className: 'msts__list' },\n\t\t\toptions.map(function (item) {\n\t\t\t\treturn _react2.default.createElement(_ListItem2.default, {\n\t\t\t\t\tkey: item[valueKey],\n\t\t\t\t\tonClick: _this.handleClick,\n\t\t\t\t\tdisabled: item.disabled,\n\t\t\t\t\thighlighted: item.highlighted,\n\t\t\t\t\tlabel: item[labelKey],\n\t\t\t\t\tvalue: item[valueKey]\n\t\t\t\t});\n\t\t\t})\n\t\t);\n\t}\n}\nexports.default = List;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/List.jsx\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/List.jsx?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(2);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst propTypes = {\n\tdisabled: _propTypes2.default.bool,\n\thighlighted: _propTypes2.default.bool,\n\tlabel: _propTypes2.default.string,\n\tonClick: _propTypes2.default.func.isRequired,\n\tvalue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired\n};\nconst defaultProps = {\n\tdisabled: false,\n\thighlighted: false,\n\tlabel: ''\n};\n\nclass ListItem extends _react2.default.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.handleClick = this.handleClick.bind(this);\n\t}\n\n\thandleClick() {\n\t\tif (this.props.disabled) {\n\t\t\treturn;\n\t\t}\n\n\t\tconst {\n\t\t\tonClick,\n\t\t\tvalue\n\t\t} = this.props;\n\t\tonClick(value);\n\t}\n\n\trender() {\n\t\tconst {\n\t\t\tdisabled,\n\t\t\thighlighted,\n\t\t\tlabel\n\t\t} = this.props;\n\t\tconst className = 'msts__list-item';\n\n\t\treturn _react2.default.createElement(\n\t\t\t'li',\n\t\t\t{\n\t\t\t\tclassName: (0, _classnames2.default)(className, disabled && `${className}_disabled`, highlighted && `${className}_highlighted`),\n\t\t\t\tonClick: this.handleClick\n\t\t\t},\n\t\t\tlabel\n\t\t);\n\t}\n}\nexports.default = ListItem;\n\nListItem.defaultProps = defaultProps;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/ListItem.jsx\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/ListItem.jsx?");

/***/ })
/******/ ]);