import path from "path";

export const addComponentFiles = () => ({
  type: "addMany",
  destination: path.join(process.cwd(), `src/packages/components/{{component_name}}`),
  base: "plop-generator/plop-templates/component/",
  templateFiles: ["plop-generator/plop-templates/component/**/*.hbs"],
  force: true, //Overwrite during testing
});
