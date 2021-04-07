import PageNotFound from './404_page'
import { withDesign } from 'storybook-addon-designs'

export default {
    title: '404_page',
    component:PageNotFound,
    decorators: [withDesign]

}


export const ErrorPage = () => <PageNotFound />;

ErrorPage.parameters = {
    design: {
        type: 'figma',
        url: "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=65%3A0",
    },
}