import Flashcard from "./Flashcard";

export default function Deck({setDeckSize, setCount, count, answersIcons, setanswersIcons}) {

    const Deck = [
            {
                question: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScript"
            },
            {
                question: "O React é __",
                answer: "uma biblioteca JavaScript para construção de interfaces"
            },
            {
                question: "Componentes devem iniciar com __",
                answer: "letra maiúscula"
            },
            {
                question: "Podemos colocar __ dentro do JSX",
                answer: "expressões"
            },
            {
                question: "O ReactDOM nos ajuda __",
                answer: " interagindo com a DOM para colocar componentes React na mesma"
            },
            {
                question: "Usamos o npm para __",
                answer: "gerenciar os pacotes necessários e suas dependências"
            },
            {
                question: "Usamos props para __",
                answer: "passar diferentes informações para componentes"
            },
            {
                question: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando"
            }
    ];
    
    const sortedDeck = sortDeck(Deck);
    setDeckSize(sortedDeck.length);

    return (
        <div className="deck">
            {sortedDeck.map((item, index) =>
            <Flashcard 
            questionNumber={index+1} 
            question={item.question} 
            answer={item.answer}
            setCount={setCount}
            count={count}
            answersIcons={answersIcons}
            setanswersIcons={setanswersIcons}
            key={index}
            /> ) }
        </div>
    );
}

function sortDeck(deck) {
    let aux = [...deck];
    aux.sort(() => Math.random() - 0.5);
    return aux;
}