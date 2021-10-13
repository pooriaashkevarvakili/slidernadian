// this function submit form states to backend;
// {
//   "Name":"soheilbijavar",
//   "Email":"sbijavar@gmail.com",
//   "Message":"SALAM TEST",
//   "Phone":"091251434341"
//   }

export const formSubmit = async (formInfo: { [key: string]: string }) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientkey: "db3eba1e8c44f00c0f7315e84e75e6f6008fca75",
    },
    body: JSON.stringify(formInfo),
  };
  try {
    const res = await fetch(
      "http://portfolio.zhoonapp.ir/odata/Contact",
      requestOptions
    );
    //
    if (res.ok) return res;
    //
  } catch (error) {
    console.log(error.message);
    throw new Error("please refresh page!");
  }
};
