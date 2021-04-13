import anime from "animejs/lib/anime.es";

export const textWrite = (ele) => {
  var textWrapper = document.querySelector(`${ele} .letters`);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  return anime
    .timeline()
    .add({
      targets: `${ele} .line`,
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
      offset: "-=875",
      delay: (el, i, l) => 80 * (l - i),
    })
    .add({
      targets: `${ele} .letter`,
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    });
};

export const EventCardAnimate = (ele) => {
  return anime
    .timeline()
    .add({
      targets: `${ele}  h4`,
      translateX: -500,
      easing: "easeInOutSine",
      delay: 500,
      duration: 600,
    })
    .add({
      targets: `${ele}  svg`,
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
    })
    .add({
      targets: `${ele}  p`,
      translateY: -500,
      easing: "easeInOutSine",
      duration: 400,
    });
};

export const createWaveAnimation = () => {
  const height = window.innerHeight
  const width = window.innerWidth;
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
    startPoint = height + amplitude*2 * Math.cos((i / 100) * units);
    startPoint = (Math.round(startPoint, 5) / height) * 100;
    clipPathPoints["startPath"] += `,  ${i}% ${startPoint}%`;

    firstControlPoint =
      (height * 2) / 3 + (amplitude / 2) * Math.cos((i / 100) * units);
    firstControlPoint = (Math.round(firstControlPoint, 5) / height) * 100;
    clipPathPoints["firstControlPath"] += `, ${i}%  ${firstControlPoint}%`;

    secondControlPoint =
      (height * 1) / 3 + amplitude * Math.cos((i / 100) * units + 2 );
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
