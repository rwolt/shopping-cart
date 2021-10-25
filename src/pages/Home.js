import { Link } from 'react-router-dom';
import heroWatches from '../images/smart-casual.jpg';
import heroChrono from '../images/casual-wrist.jpg';
import '../styles/Home.css';

const Home = (props) => {
    return(
        <div className="home-container">
            <div className="flex-row">
                <div className="hero-container hero-container-watches">
                    <img className="hero-image hero-image-wallets" src={heroWatches} alt="urban model wearing a dressy wristwatch" />
                    <div className="button-container">
                        <p className="tag-line">MEN'S WATCH SALE</p>
                        <button className="shop-now-button"><Link to="/shop">SHOP NOW</Link> </button>
                    </div>
                </div>

                <div className="hero-container hero-container-chrono">
                    <img className="hero-image hero-image-wallets" src={heroChrono} alt="man sitting at a desk wearing a casual watch" />
                    <div className="button-container">
                        <p className="tag-line">CHRONO SERIES</p>
                        <button className="shop-now-button"><Link to={`/shop/${props.chronoPath}`}>SHOP NOW</Link></button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Home;