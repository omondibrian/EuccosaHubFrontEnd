import React from "react";
import PageTitle from "./index";
import { withDesign } from "storybook-addon-designs";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Dashboard/PageTitle",
  component: PageTitle,
  decorators: [withDesign],
};

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
