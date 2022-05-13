import React from "react";
import flip_card from "../assets/images/vector.svg"


export default function Flashcard({questionNumber, question, answer}) {

    const [expanded, setExpanded] = React.useState(false);
    //console.log(questionNumber, question, answer);
    return (
        <>
            {
                expanded ?
                <div className="expandedFlashcard">
                    <h1>
                        {question}
                    </h1>
                    <img src={flip_card} alt="flip-card" />          
                </div>
                :
                <div className="flashcard" onClick={() => setExpanded(true)}>
                    <h1>Pergunta {questionNumber}</h1>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            }
        </>
    );
}