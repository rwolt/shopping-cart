import { Link } from 'react-router-dom';
import heroWatches from '../images/smart-casual.jpg';
import heroChrono from '../images/casual-wrist.jpg';
import heroWallets from '../images/black-card-wallet.jpg';
import hero4 from '../images/eyeglasses3.jpg';
import '../styles/Home.css';

const Home = (props) => {
    return(
        <div className="home-container">
            <div className="flex-row">
                <div className="hero-container hero-container-watches">
                    <img className="hero-image hero-image-watches" src={heroWatches} alt="urban model wearing a dressy wristwatch" />
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
            <div className="flex-row">
                <div className="hero-container hero-container-wallet">
                    <img className="hero-image hero-image-wallets" src={heroWallets} alt="man sitting at a desk wearing a casual watch" />
                    <div className="button-container">
                        <p className="tag-line">NEW WALLETS</p>
                        <button className="shop-now-button"><Link to="">SHOP NOW</Link></button>
                    </div>
                </div>
                <div className="hero-container hero-container-sunglasses">
                    <img className="hero-image hero-image-sunglasses" src={hero4} alt="man sitting at a desk wearing a casual watch" />
                    <div className="button-container">
                        <p className="tag-line">SUNGLASSES</p>
                        <button className="shop-now-button"><Link to={""}>SHOP NOW</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;