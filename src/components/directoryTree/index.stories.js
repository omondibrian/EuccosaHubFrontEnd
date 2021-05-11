import React from "react";
import Tree from "./Tree";

const config = {
  title: "directoryTree/Tree",
};

export default config;
export const tree = () => <Tree />;

tree.parameters = {
  docs: {
    source: {
      code: `
      import { 'Tree' } from "./directoryTree/Tree";\n<Tree />`,
    },
  },
};
