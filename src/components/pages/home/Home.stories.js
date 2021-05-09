import Home from "./Home";
import { withDesign } from "storybook-addon-designs";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/pages/home",
  component: Home,
  decorators: [withDesign, (story) => <MemoryRouter>{story()}</MemoryRouter>],
};

export const HomePage = () => <Home />;

HomePage.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=30%3A1",
  },
};
