import Footer from "./Footer";
import Deck from "./Deck";

export default function MainScreen() {
    return (
        <div className="mainScreen">
            <div className="header">
                <img src="./assets/logo2.svg" alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            <Deck />
            <Footer />
        </div>
    );
}