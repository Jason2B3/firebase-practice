const firebaseLink = "https://fir-http-34540-default-rtdb.firebaseio.com";
const jsonFile = "/data.json";

export const firebasePOST = async function () {
  const hardcodedData = { Jekyll: "hyde", Walt: "Heisenburg" };
  const postData = await fetch(`${firebaseLink}${jsonFile}`, {
    method: "POST",
    body: JSON.stringify(hardcodedData), // the data we're storing
    headers: { "Content-Type": "application/json" }, // describes content that will be set
  });
  if (!postData.ok) throw new Error("Sending cart data failed");
  console.log("fiyur", postData);
  return null;
  //! test failure with a bad URL
};

export const firebasePUT = async function () {
  // const hardcodedData = { walter: "white", jesse: "diesel" };
  const hardcodedData = { Jekyll: "hyde", Walt: "Heisenburg" };
  const putData = await fetch(`${firebaseLink}${jsonFile}`, {
    method: "PUT", // update data in our database
    body: JSON.stringify(hardcodedData),
    headers: { "Content-Type": "application/json" },
  });
  if (!putData.ok) throw new Error("Sending cart data failed");
  console.log(putData);
  return null;
};

export const firebaseDELETE = async function () {
  const deleteData= await fetch(`${firebaseLink}${jsonFile}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  });
  if(!deleteData.ok) throw new Error("deletion failed")
  console.log(deleteData)
};

export const firebaseGET = async function () {
  const pullData = await fetch(`${firebaseLink}${jsonFile}`);
  if (!pullData.ok) throw new Error("No shows found in the search results");
  const parsedData = await pullData.json();
  console.log(parsedData);
  return parsedData;
};

//# Explanation
/* None of these http request functions have...
1. error handling
2. pending/success/failure state management.

These functions can each be fed to the use-http custom hook as its first arg
They will receive these benefits after the fact
*/
