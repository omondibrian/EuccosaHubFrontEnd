
/**
 * Sends data to the backend
 * @param {string} [method="POST"] - http method POST, GET, PUT
 * @param {string} endpoint - endpoint you want to send data to
 * @param {Object<string,string>} headers - http headers
 * @param {JSON} data - json data you send to backend
 * @return {Promise<JSON>}   - fullfill with json data
 */
const request = (endpoint, method = "POST", data = {}, headers = {}) => {
  const xml = new XMLHttpRequest();
  xml.open(method, endpoint);
  xml.send(data);
  xml.responseType = "json"
  for (const headerName in headers) {
    if (Object.hasOwnProperty.call(headers, headerName)) {
      xml.setRequestHeader(headerName, headers[headerName])
    }
  }
  return new Promise((resolve) => {
    xml.onload = () => resolve({ ...xml.response, status: xml.status });
    xml.onerror = () =>
      resolve({ message: "an error occured", status: xml.status });
    xml.ontimeout = () =>
      resolve({
        message: "Request timeout please try again later",
        status: xml.status,
      });
  });
};

export default request;
