import Alert from "./index";
import StoryBookReduxWrapper from ".././../storyBookReduxWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/main.css";

const config = {
  title: "Components/Dashboard/alert",
  decorators: [
    (story) => <StoryBookReduxWrapper>{story()}</StoryBookReduxWrapper>,
  ],
  argTypes: {
    alert: {
      description: `takes alert object with message attribute and bootstrap alert css class`,
      type: { required: true },
    },
  },
};

export default config;

const Template = (args) => <Alert {...args} />;

//👇 Each story then reuses that template
export const alert = Template.bind({});

const alertMessage = {
  message: "you have sucessfull created your account",
  className: "alert-success",
};
alert.args = {
  alert: alertMessage,
};

alert.parameters = {
  docs: {
    source: {
      code: `import 'Alert' from "./dashboard/alert/index";\n<Alert alert={message: "you have sucessfull created your account",className: "alert-success"} >`,
    },
  },
};
