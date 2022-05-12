import React from "react";
import Init from "./Init";
import MainScreen from "./MainScreen";

export default function App() {

    const [qual, setQual] = React.useState("ok");

    return (
        <>
           <Init />
        </>
    );
}