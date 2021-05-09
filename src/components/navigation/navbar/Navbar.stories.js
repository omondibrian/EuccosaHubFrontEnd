import  Navbar  from "./index";
import { MemoryRouter } from "react-router";


const config = {
  title: "Components/navigation/navbar",
  decorators: [
    (story) => <MemoryRouter>{story()}</MemoryRouter>,
  ],
  
};


export default config;
export const navbar = () => <Navbar  />;

navbar.parameters={
  docs:{source:{code:`import  'Navbar'  from "./navigation/navbar/index";\n<Navbar />`}}
}