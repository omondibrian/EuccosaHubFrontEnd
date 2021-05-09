import LeaderBoardCard from "./LeaderBoardCard";
import { ourTeam } from "../../../data/Dammy/home.data";

export default {
  title: "components/cards/leaderboard",
  argTypes: {
    profile: {
      type: { required: true },
      description: "user profile card",
    },
  },
};

export const leaderBoardCard = (args) => <LeaderBoardCard {...args} />;

leaderBoardCard.args = {
  profile: ourTeam[0],
};
leaderBoardCard.parameters = {
  docs: {
    source: {
      code: `import 'LeaderBoardCard' from "./cards/LeaderBoardCard";\n<LeaderBoardCard profile={
        ${JSON.stringify(ourTeam[0], null, "\t")}} />`,
    },
  },
};
