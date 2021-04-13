import React from 'react'
import Footer from './Footer'
import { withDesign } from 'storybook-addon-designs'



export default {
    title: 'Footer',
    component: Footer,
    decorators: [withDesign],
};

export const FooterComponent = () => <Footer />;

FooterComponent.parameters = {
    design: {
        type: 'figma',
        url: "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=175%3A2",
    },
}