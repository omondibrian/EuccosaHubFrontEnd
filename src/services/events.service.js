import { IP_ADDRESS } from "../utils/constants";

export const addNewEvent = async (event) => {
  const formData = new FormData();
  for (const field in event) {
    if (Object.hasOwnProperty.call(event, field)) {
      const value = event[field];
      if (field !== "pictorials") {
        formData.append(field, value);
      } else {
        for (let i = 0; i < event.pictorials.length; i++) {
          const pic = event.pictorials[i];
          console.log(pic)
          formData.append(i + "", pic, pic.name);
        }
      }
    }
  }

  let request = new XMLHttpRequest();
  request.open("POST", IP_ADDRESS + "/event");
  request.send(formData);
};
