import logo from "../assets/images/logo.svg"

export default function Init({setStart}) {

    function startRecall() {
        setStart(true);
    }

    return (
        <div className="introScreen">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <div className="startButton" onClick={startRecall} >Iniciar Recall!</div>
        </div>        
    );  
}