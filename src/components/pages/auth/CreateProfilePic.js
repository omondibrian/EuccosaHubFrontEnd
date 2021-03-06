
/**
 * Creates a jpg image with user first name and last name  initials 
 * @param {string} firstName - user first name 
 * @param {string} lastName - user last name
 * @example
 * createDefaultProfilePic("Joe","Doe")
 * @returns {Promise<Blob>} - resolves with image blob 
 */
const createDefaultProfilePic = async (firstName, lastName) => {
  /*
    random string is appended to filename to make it totaly unique
  */
  let name = firstName[0] + lastName[0];
  let fileName = firstName + lastName + randomString();
  let svgElement = createSVGElement(name);
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


/**
 * converts svg element to jpeg image
 * @param {Image} image - js Image object
 * @param {string} fileName - name to be attached to the image
 * @returns {Promise<Blob>} - resolves with Blob object
 */
const ImageFromSvg = (image, fileName) => {
  /*creates a new jpeg image from image object provided */
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.setAttribute("width", "200px");
  canvas.setAttribute("height", "200px");
  ctx.drawImage(image, 0, 0, 200, 200, 0, 0, 200, 200);
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      blob.name = fileName;
      resolve(blob);
    }, "image/jpeg");
  });
};
/**
 * generates a random string of length 5
 * @returns {string}
 */
export const randomString = () => {
  const Int = () => {
    return Math.floor(Math.random() * 60);
  };
  const c = "0912iVDMZXQAWRYTYUJ_H-FDSAXBJO92djee77yTG967BVRRWKNB851230983012";
  return `${c[Int()]}${c[Int()]}${c[Int()]}${c[Int()]}${c[Int()]}`;
};

/**
 * creates svg element with name iniials
 * @param {string} name - name initials to be used to generate the svg 
 * @returns {SVGAElement}
 */
function createSVGElement(name) {
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
  return svgElement;
}
