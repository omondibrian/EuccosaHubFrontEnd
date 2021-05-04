const request = (endpoint, method, data = {}) => {
  const xml = new XMLHttpRequest();
  xml.open(method, endpoint);
  xml.send(data);
  return new Promise((resolve, reject) => {
    xml.onload = () => resolve(xml.response, 200);
    xml.onerror = () =>
      reject({ message: "an error occured", status: xml.status });
    xml.ontimeout = () =>
      reject({
        message: "Request timeout please try again later",
        status: xml.status,
      });
  });
};

export default request;
