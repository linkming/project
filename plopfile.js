const  routerAction = require('./plop-templates/router/action.js') 
const  viewAction = require('./plop-templates/view/action.js') 
module.exports = function (plop) {
 
    plop.setGenerator('view', viewAction);
    plop.setGenerator('router', routerAction);
};