export const login = async (credentials) => {
    console.log(credentials);
    const result = await fetch("http://localhost:3001/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(credentials)
    });
    if (result.ok) { 
    const data = await result.json();
    console.log(data);
    }else{
        //TODO:add display incase of server error or any other errors
        console.log(result.statusText)
    }
  };
  