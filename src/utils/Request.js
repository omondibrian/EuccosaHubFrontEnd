export const Request = async (
  endPoint,
  requestMethod = "GET",
  headers = {
    "Content-Type": "application/json;charset=utf-8",
  },
  body = {}
) => {
  const fetchObj = {
    method: requestMethod,
    headers,
  };
  if (requestMethod !== "GET") {
    fetchObj.body = JSON.stringify(body);
  }
  const result = await fetch(endPoint, fetchObj);
  if (result.ok) {
    const data = await result.json();
    data["status"] = 200;
    return data;
  } else {
    return { message: result.message, status: result.status };
  }
};
