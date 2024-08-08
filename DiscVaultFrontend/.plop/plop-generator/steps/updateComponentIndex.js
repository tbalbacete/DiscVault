import path from "path";

export const updateComponentIndex = () => {
  return {
    type: "modify",
    path: path.join(process.cwd(), `/src/packages/components/index.tsx`),
    transform: (content, { component_name }) => {
      //Prevent multiple adds
      const existingIndex = content.indexOf(`export * from "./${component_name}";`);
      if (existingIndex > 0) {
        return content;
      }
      // Update Exports
      let updatedContent = `${content}export * from "./${component_name}";\n`;

      return updatedContent;
    },
  };
};
