const  routerAction = require('./plop-templates/router/action.js') 
module.exports = function (plop) {
 
    plop.setGenerator('component', {
        description: '视图组件',
        prompts: [{
            type: 'input',
            name: 'name',
            message: '组件的名字, 如MyApp',
            validate: function (value) {
                if ((/([A-Z][a-z]+)+/).test(value)) { return true; }
                return '组件名称必须为驼峰形式';
            }
        }],
        actions: [
            {
                type: 'add',
                path: 'src/component/{{name}}/{{name}}.js',
                templateFile: 'templates/components/TemplateComponent.js'
            },
            {
                type: 'modify',
                path: 'src/component/{{name}}/{{name}}.js',
                pattern: /TemplateComponent/g,
                template: '{{name}}'
            },
            {
                type: 'modify',
                path: 'src/component/{{name}}/{{name}}.js',
                pattern: /template-component/g,
                template: '{{dashCase name}}'
            },
            /**
             * template-component.scss and css
             */
            {
                type: 'add',
                path: 'src/component/{{name}}/{{dashCase name}}.css',
                templateFile: 'templates/components/template-component.css'
            },{
                type: 'modify',
                path: 'src/component/{{name}}/{{dashCase name}}.css',
                pattern: /TemplateComponent/g,
                template: '{{dashCase name}}'
            },
            {
                type: 'modify',
                path: 'src/component/{{name}}/{{dashCase name}}.css',
                pattern: /template-component/g,
                template: '{{dashCase name}}'
            },
        ]
    });
    plop.setGenerator('router', routerAction);
};