import { useState } from "react";
import "./UserInput.css";
import ErrorModel from './EroorModel'
function UserInput(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const[error,setError]=useState();
  function usernameHandler(event) {
    setUsername(event.target.value);
  }
  function ageHandler(event) {
    setAge(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
        setError({
            title:'Invalid Input',
            message:'Please enter a valid name and age(non empty values.)'
        })
      return;
    }
    if (+age < 1) {
        setError({
            title:'Invalid Age',
            message:'Please enter a valid age(>=1)'
        })
      return;
    }
    props.onSubmitHandler(username, age);
    setUsername("");
    setAge("");
  }
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
        {error && <ErrorModel MSG={error} onConfirm={errorHandler} />}
    <div className="outer">
      <div className="inputs">
        <label>Username</label>
        <input value={username} onChange={usernameHandler} type="text" />
      </div>
      <div className="inputs">
        <label>Age(Year)</label>
        <input value={age} onChange={ageHandler} type="number" />
      </div>
      <button onClick={submitHandler} type="submit" className="buttons">
        Add User
      </button>
    </div>
    </div>
  );
}
export default UserInput;
