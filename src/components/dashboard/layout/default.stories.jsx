import { MemoryRouter } from "react-router"
import StoryBookReduxWrapper from "../../storyBookReduxWrapper"
import DefaultLayout from "./default"

const config = {
    title: "Components/Dashboard/layout",
    argTypes: {
        children: {
            description: "jsx elements",
        },
        noNavbar: {
            description: "Displays top navigation bar if set false",
        }

    },
    decorators: [
        (story) => <StoryBookReduxWrapper>
            <MemoryRouter>{story()}</MemoryRouter>
        </StoryBookReduxWrapper>
    ]
}
export default config

export const defaultLayout = (args) => <DefaultLayout {...args}>{args.children}</DefaultLayout>
defaultLayout.args = {
    noNavbar: false,
    children: <h1>content will be displayed here</h1>
}

defaultLayout.parameters = {
    docs: {
        source:
        {
            code: "import 'DefaultLayout' from \"./default\";\n<DefaultLayout><h1>hello world</h1></DefaultLayout>"
        }
    }
}