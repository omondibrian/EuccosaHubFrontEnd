export const addNewEvent = async (event) => {
    const result = await fetch("http://192.168.43.154:3001/event" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(event),
    });
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      //TODO:add display incase of server error or any other errors
      console.log(result.statusText);
    }
  };

  export const saveToLocalstorage = async(event)=>{
    localStorage.setItem('event',event)
  }