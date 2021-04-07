import Home from './Home'
import { withDesign } from 'storybook-addon-designs'



export default {
    title: 'Home',
    component: Home,
    decorators: [withDesign],
};

export const HomePage = () => <Home />;

HomePage.parameters = {
    design: {
        type: 'figma',
        url: "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=30%3A1",
    },
}






