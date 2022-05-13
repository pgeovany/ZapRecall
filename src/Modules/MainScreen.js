import Footer from "./Footer";
import Deck from "./Deck";
import small_logo from "../assets/images/logo-pequeno.svg"

export default function MainScreen() {
    return (
        <div className="mainScreen">
            <div className="header">
                <img src={small_logo} alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            <Deck />
            <Footer />
        </div>
    );
}