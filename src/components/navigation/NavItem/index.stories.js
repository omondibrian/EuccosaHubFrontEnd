import NavItem from "./index";

const config = {
  title: "Components/navigation/NavItem",
  argTypes: {
    className: {
      description: "css class name <string>",
    },
    active: {
      description: "specify if the link is currenty active <boolean>",
    },
    disabled: {
      description: "disable the link if set to true <boolean>",
    },
    children: {
      description: "jsx elements/element ",
      type: { required: "true" },
    },
  },
};

export default config;

export const navItem = (args) => <NavItem {...args} />;
navItem.args = {
  className: "nav-link",
  active: true,
  disabled: false,
  children: <span>NavItem</span>,
};

navItem.parameters = {
  docs: {
    source: {
      code: `import 'NavItem' from "./index";\n<NavItem props={${JSON.stringify(
        navItem.args
      )}}>NavItem</NavItem>`,
    },
  },
};
