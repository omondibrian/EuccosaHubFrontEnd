const createDefaultProfilePic = (name) => {
  const colors = ["#ff006e", "#006dd7", "#7400b8", "#219ebc"];
  const random = Math.floor(Math.random() * 4);
  let svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  text.setAttribute("x", "23");
  text.setAttribute("y", "60");
  text.setAttribute("fill", "#fff");
  text.setAttribute("style", "font-size:36px;font-family:Arial;");
  text.textContent = name;
  rect.setAttribute("fill", colors[random]);
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("width", "100");
  rect.setAttribute("height", "100");
  svgElement.setAttribute("height", "200");
  svgElement.setAttribute("width", "200");
  svgElement.setAttribute("viewBox", "0 0 100 100");
  svgElement.appendChild(rect);
  svgElement.appendChild(text);
  let xml = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  return URL.createObjectURL(blob);
};
export default createDefaultProfilePic;