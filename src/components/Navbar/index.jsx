import "./index.css";
import Logo from "../../assets/logo.jpeg";
const Navbar = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="solid-logo" src={Logo} alt="Aviral Digital Solution" />
      </div>
      <div className="navbar">
        <a href="./components/Home">Home</a>
        <a href="./components/About">About</a>
        <a href="./components/Projects">Projects</a>
        <a href="./components/Contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
