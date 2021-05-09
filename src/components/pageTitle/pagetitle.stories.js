import React from "react";
import PageTitle from "./index";
import { withDesign } from "storybook-addon-designs";
import StoryBookReduxWrapper from "../storyBookReduxWrapper";

const config = {
  title: "Components/Dashboard/PageTitle",
  component: PageTitle,
  decorators: [
    (story) => <StoryBookReduxWrapper>{story()}</StoryBookReduxWrapper>,
  ],
};

export default config;

export const PageTitleComponent = () => (
  <PageTitle
    sm="4"
    title="Page Title story"
    subtitle="story"
    className="text-sm-left"
  />
);

PageTitleComponent.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=53%3A0",
  },
};
