import React, { useState } from "react";
// import HamsterCard from "./HamsterCard";
import RandomHamster from "./RandomHamster";

function Battle() {

    // const [winner, setWinner] = useState(null);

    return (
        <>
            <h2>Battle</h2>
            <RandomHamster hamster={1}/>
            <RandomHamster hamster={2}/>
        </>
    )

}

export default Battle;
