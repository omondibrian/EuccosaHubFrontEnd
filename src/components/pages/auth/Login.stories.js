import Login from "./Login";
import { withDesign } from "storybook-addon-designs";
import StoryBookReduxWrapper from "../../storyBookReduxWrapper";
import { MemoryRouter } from "react-router-dom";
const config = {
  title: "components/pages/auth",
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
  withDesign,
  argTypes: {
    props: {
      description: "react-router-dom props object",
      type: { required: true },
     
    },
  },
};

export default config;

export const LoginPage = (args) => (
  <StoryBookReduxWrapper>
    <Login props={{ ...args }} />
  </StoryBookReduxWrapper>
);

LoginPage.args = {
  props: { history: [] },
};
LoginPage.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=53%3A0",
  },
  docs: {
    source: {
      code: `import 'Login' from ".pages//auth/login/Login";\n<Route path="/login" render={('props') => <Login {...props} />} />`,
    },
  },
};
