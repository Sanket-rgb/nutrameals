import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [enteredUsernameIsValid, setenteredUsernameIsValid] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
  const navigate = useNavigate();

  function login(loginDetails) {
    localStorage.setItem("userName", username);

    axios
      .post(" http://localhost:8080/login", loginDetails)
      .then((response, body) => {
        console.log(response.data);
        if (response.status === 200 && response.data === "Login Successful") {
          console.log(response.data);
          console.log(username);
          navigate("/homepage");

          // this.props.history.push("/");
        }
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email, password);
    if (username === "") {
      setenteredUsernameIsValid(false);
      return;
    }
    setenteredUsernameIsValid(true);

    if (password === "") {
      setEnteredPasswordIsValid(false);
      return;
    }
    setEnteredPasswordIsValid(true);
    const loginDetails = {
      userName: username,
      password: password,
    };
    // setUsername("");
    // setPassword("");
    console.log(loginDetails);
    return login(loginDetails);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-page">
        <div>
          <label>Sign in</label>
        </div>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            name="text"
            onChange={usernameChangeHandler}
            value={username}
          ></input>
          {!enteredUsernameIsValid && <p>Username field cannot be empty.</p>}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={passwordChangeHandler}
            value={password}
          ></input>
          {!enteredPasswordIsValid && <p>Password cannot be empty.</p>}
        </div>
        <button type="outlined">Submit</button>
      </div>
    </form>
  );
}
export default Login;
