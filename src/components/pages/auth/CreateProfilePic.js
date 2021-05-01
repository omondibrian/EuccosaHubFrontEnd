const createDefaultProfilePic = async (firstName, lastName) => {
  /*create an svg with name initials as text
    random string is appended to filename to make it totaly unique
  */

  let name = firstName[0] + lastName[0];
  let fileName = firstName + lastName + randomString();

  let svgElement = generateSVGElement(name);
  /*create image with svg Blob as src */
  let xml = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const image = new Image();
  image.src = url;
  let ImageBlob;
  return new Promise((resolve, reject) => {
    image.onload = async () => {
      ImageBlob = await ImageFromSvg(image, `${fileName}.jpeg`);
      resolve(ImageBlob);
    };
  });
};

export default createDefaultProfilePic;

const ImageFromSvg = (image, fileName) => {
  /*creates a new jpeg image from image object provided */
  let fileUrl, file;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.setAttribute("width", "200px");
  canvas.setAttribute("height", "200px");
  ctx.drawImage(image, 0, 0, 200, 200, 0, 0, 200, 200);
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      blob.name = fileName;
      window.URL.revokeObjectURL(fileUrl);
      fileUrl = window.URL.createObjectURL(blob);
      file = blob;
      resolve(blob);
    }, "image/jpeg");
  });
};

const randomString = () => {
  const Int = () => {
    return Math.floor(Math.random() * 60);
  };
  const c = "0912iVDMZXQAWRYTYUJ_H-FDSAXBJO92djee77yTG967BVRRWKNB851230983012";
  return `${c[Int()]}${c[Int()]}${c[Int()]}${c[Int()]}${c[Int()]}`;
};
function generateSVGElement(name) {
  const colors = ["#ff006e", "#006dd7", "#7400b8", "#219ebc"];
  const random = Math.floor(Math.random() * 4);
  let svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  createSVGElement(name, colors, random, svgElement);
  return svgElement;
}

function createSVGElement(name, colors, random, svgElement) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  text.setAttribute("x", "23");
  text.setAttribute("y", "60");
  text.setAttribute("fill", "#fff");
  text.setAttribute("style", "font-size:36px;font-family:Arial;");
  text.textContent = name.toUpperCase();
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
}
