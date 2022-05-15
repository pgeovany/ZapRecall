export default function Footer({deckSize, count, answersIcons}) {
    return (
        <>
            {
                answersIcons.length !== deckSize ? 
                    <div className="footer">
                        <div>
                            {count}/{deckSize} CONCLUÍDOS
                        </div>
                        <div>
                            {answersIcons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                        </div>
                    </div>
                    :
                    missedOne(answersIcons) ?
                        <EndMessage
                            deckSize={deckSize}
                            count={count}
                            answersIcons={answersIcons}
                            emoji={"😢"}
                            title={"Putz..."}
                            text1={"Ainda faltam alguns..."}
                            text2={"Mas não desanime!"}
                        />   
                        :
                        <EndMessage
                            deckSize={deckSize}
                            count={count}
                            answersIcons={answersIcons}
                            emoji={"🥳"}
                            title={"Parabéns!"}
                            text1={"Você não esqueceu de"}
                            text2={"nenhum flashcard!"}
                        />   
            }
        </>
    );
}

function EndMessage({deckSize, count, answersIcons, emoji, title, text1, text2}) {
    return (
        <div className="footer">
        <div className="endGameMessage">
            <h1>{emoji}<strong> {title}</strong></h1>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        <div>
            {count}/{deckSize} CONCLUÍDOS
        </div>
        <div>
            {answersIcons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
        </div>
    </div>  
    );
}

function missedOne(answersIcons) {
    return answersIcons.includes("close-circle");
}