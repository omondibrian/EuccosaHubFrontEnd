

const createWaveAnimation = (height = 800, width = 1200) => {
  const amplitude = width < 500 ? 30 : 70;
  const units = 5 * Math.PI;
  let clipPathPoints = {
    startPath: "polygon(100% 100%, 0% 100%",
    firstControlPath: "polygon(100% 100%, 0% 100%",
    secondControlPath: "polygon(100% 100%, 0% 100%",
    endPath: "polygon(100% 100%, 0% 100%",
  };
  let startPoint, firstControlPoint, secondControlPoint, endPoint;
  for (let i = 0; i <= 100; ++i) {
    startPoint = height-50/i + amplitude * 2 * Math.cos((i / 100) * units);
    startPoint = (Math.round(startPoint, 5) / height) * 100;
    clipPathPoints["startPath"] += `,  ${i}% ${startPoint}%`;

    firstControlPoint =
      (height * 2) / 3 + (amplitude / 2) * Math.cos((i / 100) * units);
    firstControlPoint = (Math.round(firstControlPoint, 5) / height) * 100;
    clipPathPoints["firstControlPath"] += `, ${i}%  ${firstControlPoint}%`;

    secondControlPoint =
      (height * 1) / 3 + amplitude * Math.cos((i / 100) * units + 2);
    secondControlPoint = (Math.round(secondControlPoint, 5) / height) * 100;
    clipPathPoints["secondControlPath"] += `,  ${i}% ${secondControlPoint}%`;

    endPoint = -3 * Math.cos((i / 100) * units);
    endPoint = (Math.round(endPoint, 5) / height) * 100;
    clipPathPoints["endPath"] += `,  ${i}% ${endPoint}%`;
  }
  clipPathPoints["startPath"] += ")";
  clipPathPoints["firstControlPath"] += ")";
  clipPathPoints["secondControlPath"] += ")";
  clipPathPoints["endPath"] += ")";
  return clipPathPoints;
};


//computes and write clippath points to clipPath.json 
// const smallDevices = createWaveAnimation(600, 400);
// const largeDevices = createWaveAnimation();

// const animation = {
//   smallDevices: smallDevices,
//   largeDevices: largeDevices,
// };

// const fs = require("fs");
// fs.writeFileSync("clipPath.json", JSON.stringify(animation), () => {});

