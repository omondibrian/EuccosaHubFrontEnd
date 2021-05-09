import EventCard from "./EventCard";
import { myEvent } from "../../../data/Dammy/home.data";

export default {
  title: "components/cards/event",
  argTypes:{
    event:{
      description:"event object",
      typecheck:{required:true}
    }
  }
  
};

export const eventCard = (args) => <EventCard {...args} />;
eventCard.args={
  event:myEvent
}
eventCard.parameters = {
  docs:{source:{code:`import 'EventCard' from "./cards/EventCard";\n<EventCard event={${JSON.stringify(myEvent,null,"\t")}} />`}}
}