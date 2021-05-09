import { MemoryRouter } from "react-router";
import NavLink from "./index";

const config = {
  title: "Components/navigation/NavLink",
  argTypes: {
    title: {
      description: "link name <string>",
      type: { required: true },
    },
    icon: {
      description: "material-icons icon name",
    },
    to: {
      description: "link href attribute value",
      type: { required: true },
    },
  },
};

export default config;

export const navLink = (args) =><MemoryRouter> <NavLink {...args} /></MemoryRouter>;
navLink.args = {
  title: "NavLink",
  icon: "edit",
  after: "",
  to: "/",
};

navLink.parameters = {
  docs: {
    source: {
      code: `import 'NavLink' from "./dashboard/navigation/navlink";\n<NavLink props={${JSON.stringify(
        navLink.args
      )}}/>`,
    },
  },
};
