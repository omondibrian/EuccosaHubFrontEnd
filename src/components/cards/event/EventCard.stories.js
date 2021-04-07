import EventCard from './EventCard'
import { withDesign } from 'storybook-addon-designs'



export default {
    title: 'EventCard',
    component: EventCard,
    decorators: [withDesign],
};

export const EventCardPage = () => <EventCard />;

EventCardPage.parameters = {
    design: {
        type: 'figma',
        url: "https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=30%3A1",
    },
}