import React from "react";
import { AnimatedCheck } from "./index";



const config = {
  title: "Components/animated action",
  argTypes:{
    successMark:{description:"Animated check mark"}
  }
};

export default config;

const Template = () => <AnimatedCheck />;

export const successMark = Template.bind({})
successMark.parameters={
   docs:{source:{code:`import { "AnimatedCheck" } from "./AnimatedCheck/index";\n<AnimatedCheck />`}}
}