import React, { useState } from "react";
import RandomHamster from "./RandomHamster";

function HamsterCard(props) {

    // const [winner, setWinner] = useState(null);

    return (
    <section>
        {/* <p onClick={() => setWinner(props.hamster)}>Hamster {props.hamster}</p> */}
        <RandomHamster/>
    </section>
    )

}

export default HamsterCard;
