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
