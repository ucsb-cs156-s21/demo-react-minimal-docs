(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1306:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(69),_clientLogger=__webpack_require__(40),_configFilename=__webpack_require__(1307);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1307:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1308),__webpack_require__(1309);var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1308:function(module,exports,__webpack_require__){},1310:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(441).configure)([__webpack_require__(1311),__webpack_require__(1312)],module,!1)}).call(this,__webpack_require__(127)(module))},1311:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1311},1312:function(module,exports,__webpack_require__){var map={"./stories/components/Footer/AppFooter.stories.js":1321,"./stories/components/Loading/Loading.stories.js":1322,"./stories/components/Nav/AppNavbar.stories.js":1323};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1312},1321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(158),react=__webpack_require__(0),react_default=__webpack_require__.n(react),AppFooter_AppFooter=function AppFooter(){return react_default.a.createElement("footer",{className:"bg-light p-3 text-center"},"This is a demo of a minimal React frontend Check out the source code on"," ",react_default.a.createElement("a",{href:"https://github.com/ucsb-cs156-s21/demo-react-minimal"},"GitHub"),"!")};AppFooter_AppFooter.__docgenInfo={description:"",methods:[],displayName:"AppFooter"};var Footer_AppFooter=AppFooter_AppFooter;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Footer/AppFooter.js"]={name:"AppFooter",docgenInfo:AppFooter_AppFooter.__docgenInfo,path:"src/main/components/Footer/AppFooter.js"});__webpack_exports__.default={title:"components/Footer/AppFooter",component:Footer_AppFooter};var Default=function Template(){return react_default.a.createElement(Footer_AppFooter,null)}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <AppFooter />"}},Default.parameters)},1322:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(158),react=__webpack_require__(0),react_default=__webpack_require__.n(react),loading=__webpack_require__(568),loading_default=__webpack_require__.n(loading),Loading_Loading=function Loading(){return react_default.a.createElement("div",{className:"spinner"},react_default.a.createElement("img",{src:loading_default.a,alt:"Loading"}))};Loading_Loading.__docgenInfo={description:"",methods:[],displayName:"Loading"};var components_Loading_Loading=Loading_Loading;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Loading/Loading.js"]={name:"Loading",docgenInfo:Loading_Loading.__docgenInfo,path:"src/main/components/Loading/Loading.js"});__webpack_exports__.default={title:"components/Loading/Loading",component:components_Loading_Loading};var Default=function Template(){return react_default.a.createElement(components_Loading_Loading,null)}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <Loading />"}},Default.parameters)},1323:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(158),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router=__webpack_require__(42),Navbar=__webpack_require__(1331),Nav=__webpack_require__(1332),lib=__webpack_require__(368);function AppNavbar(){return react_default.a.createElement(Navbar.a,{bg:"dark",variant:"dark"},react_default.a.createElement(lib.LinkContainer,{to:""},react_default.a.createElement(Navbar.a.Brand,{"data-testid":"brand"},"Changeme To App Name")),react_default.a.createElement(Nav.a,null,react_default.a.createElement(lib.LinkContainer,{to:"/about"},react_default.a.createElement(Nav.a.Link,null,"About"))))}AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar"};var Nav_AppNavbar=AppNavbar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/AppNavbar.js"]={name:"AppNavbar",docgenInfo:AppNavbar.__docgenInfo,path:"src/main/components/Nav/AppNavbar.js"});__webpack_exports__.default={title:"components/Nav/AppNavbar",component:Nav_AppNavbar};var Default=function Template(){return react_default.a.createElement(react_router.a,null,react_default.a.createElement(Nav_AppNavbar,null))}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => (\n  <MemoryRouter>\n    <AppNavbar />\n  </MemoryRouter>\n)"}},Default.parameters)},568:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/loading.c5590569.svg"},576:function(module,exports,__webpack_require__){__webpack_require__(577),__webpack_require__(863),__webpack_require__(864),__webpack_require__(1026),__webpack_require__(1244),__webpack_require__(1277),__webpack_require__(1285),__webpack_require__(1297),__webpack_require__(1299),__webpack_require__(1304),__webpack_require__(1306),module.exports=__webpack_require__(1310)},681:function(module,exports){},693:function(module,exports){},808:function(module,exports){},864:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(441)}},[[576,1,2]]]);
//# sourceMappingURL=main.d69633f8cbf3ced8084e.bundle.js.map