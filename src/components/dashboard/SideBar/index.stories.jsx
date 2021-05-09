import MainSideBar from "./index";
import StoryBookReduxWrapper from "../../storyBookReduxWrapper";
import { MemoryRouter } from "react-router-dom";
const config = {
    title: "components/dashboard/Sidebar",
    decorators: [(story) => <StoryBookReduxWrapper><MemoryRouter>{story()}</MemoryRouter></StoryBookReduxWrapper>],
};

export default config;
export const sideBar = () => <MainSideBar />

sideBar.parameters = {
    docs: { source: { code: `import 'MainSideBar' from "./dashboard/SideBar";\n<MainSideBar />` } }
}

