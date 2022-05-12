export default function Init({setStart}) {

    function startRecall() {
        setStart(true);
    }

    return (
        <div className="introScreen">
            <img src="./assets/logo.svg" alt="Logo" />
            <h1>ZapRecall</h1>
            <div className="startButton" onClick={startRecall} >Iniciar Recall!</div>
        </div>        
    );  
}