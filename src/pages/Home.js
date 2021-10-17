import hero from '../images/urban-casual.jpg';
import '../styles/Home.css';

const Home = () => {
    return(
        <div className="home-container">
            <div className="button-container">
                <p className="tag-line">Men's Watch Sale</p>
                <button className="shop-now-button">Shop Now </button>
            </div>
            <img className="hero-image" src={hero} alt="urban model wearing a wristwatch" />
        </div>

    )
}

export default Home;