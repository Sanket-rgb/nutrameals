import { useNavigate } from "react-router-dom";
import "./styles/InitialHeader.css";

function InitialHeader(props) {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div className="header">
      <div className="header-right">
        <button onClick={loginPage}>Login</button>
        <button className="register" onClick={register}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default InitialHeader;
