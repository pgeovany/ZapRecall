import React from "react";
import flip_card from "../assets/images/vector.svg"


export default function Flashcard({questionNumber, question, answer, setCount, count, answersIcons, setanswersIcons}) {

    const [expanded, setExpanded] = React.useState(false);
    const [flipped, setFlipped] = React.useState(false);
    const [recallType, setRecallType] = React.useState("");
    const [icon, setIcon] = React.useState("play-outline");
    return (
        <>
            {
                expanded === true && recallType === "" ?

                    flipped ? 
                        <div className="flippedCard">
                            <h1>
                                {answer}
                            </h1>         
                            <div>
                                <button className="noRecall" onClick={() => recall("noRecall",setExpanded ,setRecallType, setIcon, setCount, count, answersIcons, setanswersIcons)}>
                                    <p>Não</p>
                                    <p>lembrei</p>
                                </button>
                                <button className="partialRecall" onClick={() => recall("partialRecall",setExpanded ,setRecallType, setIcon, setCount, count, answersIcons, setanswersIcons)}>
                                    Quase não lembrei
                                </button>
                                <button className="totalRecall" onClick={() => recall("totalRecall",setExpanded ,setRecallType, setIcon, setCount, count, answersIcons, setanswersIcons)}>
                                    Zap!
                                </button>
                            </div>
                        </div>
                        :
                        <div className="expandedFlashcard">
                            <h1>
                            {question}
                            </h1>
                            <img src={flip_card} alt="flip-card" onClick={() => setFlipped(true)}/>          
                        </div>

                    :

                    <div className={`flashcard ${recallType}`} onClick={() => setExpanded(true)}>
                        <h1>Pergunta {questionNumber}</h1>
                        <ion-icon name={icon}></ion-icon>
                    </div>
            }
        </>
    );
}

function recall(answerType, setExpanded, setRecallType, setIcon, setCount, count, answersIcons, setanswersIcons) {
    switch (answerType){
        case "noRecall":
            setIcon("close-circle");
            setanswersIcons([...answersIcons, "close-circle"]);
            break;
        case "partialRecall":
            setIcon("help-circle");
            setanswersIcons([...answersIcons, "help-circle"]);
            break;
        case "totalRecall":
            setIcon("checkmark-circle");
            setanswersIcons([...answersIcons, "checkmark-circle"]);
            break;
        default:
            break;
    }
    setCount(count + 1);
    setRecallType(answerType);
    setExpanded(false);
}