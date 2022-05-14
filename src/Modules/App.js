import React from "react";
import Init from "./Init";
import MainScreen from "./MainScreen";
import "../assets/css/reset.css"
import "../assets/css/style.css"

export default function App() {

    const [start, setStart] = React.useState(true);

    return (
        <>
           {
               start ? <MainScreen /> : <Init setStart={setStart}/>
           }
        </>
    );
}