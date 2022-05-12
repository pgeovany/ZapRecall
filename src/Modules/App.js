import React from "react";
import Init from "./Init";
import MainScreen from "./MainScreen";

export default function App() {

    const [start, setStart] = React.useState(false);

    return (
        <>
           {
               start ? <MainScreen /> : <Init setStart={setStart}/>
           }
        </>
    );
}