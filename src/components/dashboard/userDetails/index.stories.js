import StoryBookReduxWrapper from "../../storyBookReduxWrapper";
import UserDetails from "./index";

const config = {
  title: "Components/Dashboard/userDetails",
  argTypes: {
    userDetails: {
      description:
        "This component displays user  account details, profile image.Allow user to\
        update his/her profile image",
    },
  },
  decorators: [
    (story) => <StoryBookReduxWrapper>{story()}</StoryBookReduxWrapper>,
  ],
};
export default config;

export const userDetails =()=> <UserDetails />;
userDetails.parameters = {
  docs: {
    source: {
      code:
        "import 'UserDetails' from './dashboard/userDetails';\n<UserDetails />",
    },
  },
};