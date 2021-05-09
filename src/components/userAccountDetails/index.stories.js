import StoryBookReduxWrapper from "../storyBookReduxWrapper";
import UserAccountDetails from "./index";

const config = {
  title: "Components/Dashboard/userAccountDetails",
  argTypes: {
    userAccountDetails: {
      description:
        "This component displays user account information. It also allow user \
            to edit his/her account information",
    },
  },
  decorators: [
    (story) => <StoryBookReduxWrapper>{story()}</StoryBookReduxWrapper>,
  ],
};
export default config;

export const userAccountDetails = () => <UserAccountDetails />;
userAccountDetails.parameters = {
  docs: {
    source: {
      code:
        "import 'UserAccountDetails' from './dashboard/userAccountDetails';\n<UserAccountDetails />",
    },
  },
};
