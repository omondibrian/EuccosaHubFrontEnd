import React from "react";
import Button from "./index";

const config = {
  title: "components/button",
  argTypes: {
    button: {
      description: "takes any jsx attribute as props",
    },
    onClick: {
      description: "function"
    },
    className:{
      description:"string",
    },
    children:{
      description:"jsx element",
    }
  },
};

export default config;
const Template = (args) => <Button {...args}>Button</Button>;

export const button = Template.bind({});
button.args = {
  onClick: () => {},
  className: "btn_primary",
};
button.parameters = {
  docs: {
    source: {
      code: `
      import { 'Button' } from "./button";\n
      <Button className="btn_primary" onClick={()=>{}}>{"children"}</Button>`,
    },
  },
};
