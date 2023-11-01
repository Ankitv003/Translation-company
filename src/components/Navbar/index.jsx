import "./index.css";
// import Logo from "../../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <span>
        <FontAwesomeIcon icon={faLink} className="img " />
        liinks
      </span>

      <a href="./components/Home">Pricing</a>
      <a href="./components/About">Gallery</a>
      <a href="./components/Projects">QR Codes</a>
      <a className="help-link" href="./components/Contact">
        Help
      </a>
      <a className="right-links" href="./components/Contact">
        Login
      </a>
      <a className="sign-up-link" href="./components/Contact">
        Sign Up
        <FontAwesomeIcon className="sign-up-icon" icon={faCirclePlus} />
      </a>
    </div>
  );
};

export default Navbar;

// <div className="container">
// <div className="logo-container">
//   {/* <img className="solid-logo" src={Logo} alt="Aviral Digital Solution" /> */}
// </div>
// <div className="navbar">
//   <a href="./components/Home">Home</a>
//   <a href="./components/About">About</a>
//   <a href="./components/Projects">Projects</a>
//   <a href="./components/Contact">Contact Us</a>
// </div>
// </div>
