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
  request.open("POST", "http://192.168.43.154:3001/event");
  request.send(formData);
};
