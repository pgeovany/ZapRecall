import React from "react";
import flip_card from "../assets/images/vector.svg"


export default function Flashcard({questionNumber, question, answer}) {

    const [expanded, setExpanded] = React.useState(false);
    const [flipped, setFlipped] = React.useState(false);
    //console.log(questionNumber, question, answer);
    return (
        <>
            {
                expanded ? 

                    flipped ? 
                    <div className="expandedFlashcard">
                        <h1>
                            {answer}
                        </h1>         
                    </div>
                    :
                    <div className="expandedFlashcard">
                        <h1>
                        {question}
                        </h1>
                        <img src={flip_card} alt="flip-card" onClick={() => setFlipped(true)}/>          
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