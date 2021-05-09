export const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      backgroundColor: "#f2fbf6",
      borderColor: "#8ae2b7",
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: true,
    },
  ],
};
export const pieData = {
  labels: ["1st years", "2nd years", "3rd years", "4th years", "others"],
  datasets: [
    {
      data: [14, 10, 5, 2, 20],
      backgroundColor: [
        "rgba(0,123,255,0.9)",
        "rgba(0,123,255,0.5)",
        "rgba(0,123,255,0.3)",
      ],
    },
  ],
};
export const Accountdata = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "Account Balance Overview",
      data: [1922, 1345, 969, 859, 1567, 556],
      borderColor: "#ff6384",
      fill: false,
      stepped: true,
    },
  ],
};
