import AddNewEvent from "./index";
import StoryBookReduxWrapper from "../../storyBookReduxWrapper";

const config = {
    title: "components/dashboard/newEvent",
    decorators: [(story) => <StoryBookReduxWrapper>{story()}</StoryBookReduxWrapper>],

};

export default config;

export const addnewEvent = () => (
    <AddNewEvent />
);

addnewEvent.parameters = {
    docs: { source: { code: `import 'AddNewEvent' from "./dashboard/NewEvent";\n<AddNewEvent />` } }
}

