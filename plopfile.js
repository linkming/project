const  routerAction = require('./plop-templates/router/action.js') 
const  viewAction = require('./plop-templates/view/action.js') 
const  componentAction = require('./plop-templates/component/action.js') 
module.exports = function (plop) {
    plop.setGenerator('view', viewAction);
    plop.setGenerator('component', componentAction);
    plop.setGenerator('router', routerAction);
};