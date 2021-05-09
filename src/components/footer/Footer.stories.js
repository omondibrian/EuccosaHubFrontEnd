import React from "react";
import Footer from "./Footer";
import { withDesign } from "storybook-addon-designs";

const config = {
  title: "components/Footer",
  decorators: [withDesign],
};
export default config;
export const footer = () => <Footer />;

footer.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=175%3A2",
  },
  docs: {
    source: { code: `import 'Footer' from './footer/Footer'\n<Footer />` },
  },
};
