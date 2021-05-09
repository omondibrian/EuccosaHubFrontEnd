import SmallStats from "./SmallStats";
import { data } from "../../../../data/Dammy/dashboard.data";

export default {
  title: "components/dashboard/statsOverview/charts",
  argTypes: {
    data: {
      description: "chart data",
      type: { required: true },
    },
    label: {
      description:
        "chart label- should be small in length, single word <string>",
      type: { required: true },
    },
    increase: {
      description: "statistical trend <boolean>",
      type: { required: true },
    },
    percentage: {
      description: "statistical trend percentage  <string>",
      type: { required: true },
    },
    value: {
      description: "current statistical value  <string>",
      type: { required: true },
    },
  },
};

export const smallStats = (args) => (
  <div style={{ width: "200px" }}>
    <SmallStats {...args} />
  </div>
);

smallStats.args = {
  label: "Test",
  value: "3203",
  percentage: "39%",
  increase: true,
  data: data,
};
smallStats.parameters = {
  docs: {
    source: {
      code: `import 'SmallStats' from "./../../charts/SmallStats";\n<SmallStats ${JSON.stringify(
        smallStats.args,
        null,
        "\t"
      )} />`,
    },
  },
};
