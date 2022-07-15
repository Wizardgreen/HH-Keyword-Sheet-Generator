const path = "plop-templates";

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "add new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: `${path}/component/main.hbs`
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: `${path}/component/index.hbs`
      }
    ]
  });
  plop.setGenerator("page", {
    description: "add new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: `${path}/page/main.hbs`
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: `${path}/page/index.hbs`
      }
    ]
  });
};
