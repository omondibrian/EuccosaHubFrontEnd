import React from "react";
import FileUploder from "./index";

const config = {
  title: "components/button/fileUploader",
  argTypes: {
    button: {
      description: "takes all jsx input attribute",
    },
    onChange: {
      description: "function to call when input value changes",
      type: { required: true },
    },
    id: {
      description: "jsx id attribute",
      type: { required: true },
    },
  },
};

export default config;
const Template = (args) => <FileUploder {...args} />;

export const fileUploader = Template.bind({});
fileUploader.args = {
  id: "input-file",
  type: "file",
  accept: "image/*",
  onChange: (event) => { },
};
fileUploader.parameters = {
  docs: {
    source: {
      code: `
      import { 'FileUploader' } from "./button/fileUploader";\n<FileUploder props={${JSON.stringify(
        fileUploader.args,
        null,
        "\t"
      )}} />`,
    },
  },
};
