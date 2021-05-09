import PieChart from "./Piechart";
import { pieData } from "../../../../data/Dammy/dashboard.data";

export default {
  title: "components/dashboard/statsOverview/charts",
  argTypes: {
    data: {
      description: "chart data",
      type: { required: true },
    },
    title: {
      description: "chart title <string>",
      type: { required: true },
    },
  },
};

export const piechart = (args) => (
  <div className="row">
    <PieChart {...args} />
  </div>
);

piechart.args = {
  data: pieData,
  title: "Registered members",
};
piechart.parameters = {
  docs: {
    source: {
      code: `import 'Piechart' from "./../../charts/Piechart";\n<Piechart data={${JSON.stringify(
        pieData,
        null,
        "\t"
      )}} title="piechart" />`,
    },
  },
};
