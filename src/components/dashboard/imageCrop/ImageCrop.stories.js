import ImageCrop from "./ImageCrop";
import StoryBookReduxWrapper from "../../storyBookReduxWrapper";
import profile from "../../../assets/images/profile/index.svg";

const config = {
  title: "components/dashboard/imageCrop",
  argTypes: {
    imageCrop: {
      description: `Used to update user profile.This commponent takes jsx className attribute and image src attribute wich you want to crop
                   .The cropImage send to backend to update user profile`,
    },
    profile:{
      description:"image src",
      type: { required: true },
    },
    className:{
      description:"css className",
    }

  },
};

export default config;

const Template = (args) => (
  <StoryBookReduxWrapper>
    <ImageCrop {...args} />
  </StoryBookReduxWrapper>
);
export const imageCrop = Template.bind({});
imageCrop.args = {
  profile: profile,
  className: "d-block",
};
imageCrop.parameters = {
  docs: {
    source: { code: `import 'ImageCrop' from "./dashboard/imageCrop/ImageCrop";\n<ImageCrop profile={${profile}} className="d-block">` },
  },
};





