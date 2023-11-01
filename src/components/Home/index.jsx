import "./index.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="container">
      <div className="home-content">
        <h1 className="home-title">
          Centralize your online presence with Liinks{" "}
          <FontAwesomeIcon className="star-icon" icon={faStar} />
        </h1>
        <p className="home-para">
          Gather all your links, social media, music, videos, and more in one
          place. Create a page that matches your style and never worry about
          changing your bio link again.
        </p>
        <div className="button-container">
          <div className="home-link-icon">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div className="home-link-text"></div>
          <input className="home-input-text" placeholder="yournamehere" />
          <div className="home-start-button">Get started</div>
        </div>
      </div>
      <img
        src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/hero-graphic.png"
        className="home-image"
      />
    </div>
  );
};

export default Home;
