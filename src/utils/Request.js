export const Request = async (
  endPoint,
  requestMethod = "GET",
  headers = {
    "Content-Type": "application/json;charset=utf-8",
  }
) => {
  const result = await fetch(endPoint, {
    method: requestMethod,
    headers,
  });
  if (result.ok) {
    const data = await result.json();
    data["status"] = 200;
    return data;
  } else {
    return { message: result.message, status: result.status };
  }
};
