import { addComponentFiles, updateComponentIndex } from "./steps/index.js";
import { hasNumbers, hasSpaces, isNotPascalCase } from "./validators.js";

export const componentGenerator = {
  description: "Creates new module which includes pages/helpers/routes etc",
  prompts: [
    {
      name: "component_name",
      type: "input",
      message: "What is the component name? Should be singular and PascalCase",
      validate: (value) => {
        if (hasSpaces(value)) return "value cannot include spaces.";
        if (isNotPascalCase(value)) return "value must be in PascalCase";
        if (hasNumbers(value)) return "value must not have numbers";
        return true;
      },
    },
    {
      name: "confirm",
      type: "confirm",
      message: (data) => `You are about to create a new component (${data.component_name}). Proceed?`,
    },
  ],
  actions: (data) => {
    console.log(data);
    if (!data.confirm) {
      return ["Component generation cancelled"];
    }

    return [addComponentFiles(), updateComponentIndex()];
  },
};
