import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Card from "./components/Card";

function App() {
  const [initial, setInitial] = useState([]);

  const transfer = (user, Age) => {
    setInitial([...initial, { ["Name"]: user, ["age"]: Age,["id"]:Math.random().toString() }]);
  };

  return (
    <div>
      <UserInput onSubmitHandler={transfer} />
      <Card DATA={initial} />
    </div>
  );
}

export default App;
