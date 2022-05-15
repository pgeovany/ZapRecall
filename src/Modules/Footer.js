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
                <div className="footer">
                    <div className="endGameMessage">
                        <h1>😢 <strong>Putz...</strong></h1>
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                    </div>
                    <div>
                        {count}/{deckSize} CONCLUÍDOS
                    </div>
                    <div>
                        {answersIcons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                    </div>
                </div>
                :
                <div className="footer">
                    <div className="endGameMessage">
                        <h1>🥳 <strong>Parabéns!</strong></h1>
                        <p>Você não esqueceu de</p>
                        <p>nenhum flashcard!</p>
                    </div>
                    <div>
                        {count}/{deckSize} CONCLUÍDOS
                    </div>
                    <div>
                        {answersIcons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                    </div>
                </div>      
            }
        </>
    );
}

function missedOne(answersIcons) {
    return answersIcons.includes("close-circle");
}