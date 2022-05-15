import React from "react"
import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";

export default function MainScreen() {

    const [count, setCount] = React.useState(0);
    const [deckSize, setDeckSize] = React.useState();
    const [answersIcons, setanswersIcons] = React.useState([]);

    return (
        <div className="mainScreen">
            <Header />
            <Deck
                setDeckSize={setDeckSize}
                setCount={setCount}
                count={count}
                answersIcons={answersIcons}
                setanswersIcons={setanswersIcons}
            />
            <Footer deckSize={deckSize} count={count} answersIcons={answersIcons}/>
        </div>
    );
}