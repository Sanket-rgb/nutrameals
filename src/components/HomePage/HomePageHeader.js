import "./styles/HomePageHeader.css";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePageHeader(props) {
  const navigate = useNavigate();

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function accountSummary() {
    var loginDetails = {
      userName: localStorage.getItem("userName"),
      password: "",
    };

    axios
      .post(" http://localhost:8080/viewAccount", loginDetails)
      .then((response, body) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/accountSummary", { state: response.data });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  return (
    <div className="header">
      {/* <img className="menu-icon-logo" alt="logo" src={logo} /> */}
      {/* <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>
          &times;
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div> */}
      <div className="left-content">
        <div className="side-menu" onclick={openNav}>
          &#9776;
        </div>
        <div className="image-container">
          <img className="menu-icon-logo" alt="logo" src={logo} />
        </div>
        <button onClick={accountSummary}>view account</button>
      </div>

      <div className="header-right">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        <a className="signout" href="#signout">
          Sign out
        </a>
      </div>
    </div>
  );
}

export default HomePageHeader;
