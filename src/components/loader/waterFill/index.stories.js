import React from "react";
import WaterFill from "./index";



const config = {
  title: "Components/loaders/waterfill",
  argTypes:{
    waterfill:{
      description:"waterfill animation loader"
    }
  }
};

export default config;
export const waterfill = () => <WaterFill/>;
waterfill.parameters={
  docs:{source:{code:`import "WaterFill" from "./loaders/index";\n<WaterFill/>`}}
}