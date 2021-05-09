import { AnimatedCancelMark } from "./index";

const config = {
  title: "Components/animated action",
  argTypes: {
    cancelMark: { description: "Animatedcancel mark" },
  },
};

export default config;

const Template = () => <AnimatedCancelMark />;

export const cancelMark = Template.bind({});
cancelMark.parameters = {
  docs: {
    source: {
      code: `import { "AnimatedCancelMark" } from "./AnimatedCancelMark/index";\n<AnimatedCancelMark />`,
    },
  },
};
