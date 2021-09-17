import {
  firebaseGET,
  firebasePOST,
  firebasePUT,
  firebaseDELETE,
} from "./components/fetchFunctions";
import "./App.css";

function App() {
  const postHandler = () => firebasePOST();
  const getHandler = () => firebaseGET();
  const putHandler = () => firebasePUT();
  const deleteHandler = () => firebaseDELETE();
  return (
    <>
      <button onClick={getHandler} className="btn">
        GET
      </button>
      <button onClick={deleteHandler} className="btn">
        DELETE
      </button>
      <button onClick={postHandler} className="btn">
        POST
      </button>
      <button onClick={putHandler} className="btn">
        PUT
      </button>
    </>
  );
}

export default App;
