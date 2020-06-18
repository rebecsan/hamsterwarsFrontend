import React, { useState, useEffect } from "react";
// import HamsterCard from "./HamsterCard";
import { useParams } from "react-router-dom";
import {fetchHamster} from "./helpers/randomHamster.js";
import {fetchIdHamster} from "./helpers/idHamster.js"
import {handleWinnerClick} from "./helpers/handleWinnerClick.js"
import './battle.css';

function Battle() {

    const [hamster1, setHamster1] = useState({});
    const [hamster2, setHamster2] = useState({});
    
    const params = useParams();
    // const [winner, setWinner] = useState({});
    // const [loser, setLoser] = useState({});

    useEffect(() => {

        async function getHamsters() {

            if(params.id1 && params.id2) {
                
                fetchIdHamster(setHamster1, params.id1);
                fetchIdHamster(setHamster2, params.id2);

            } else {
                
                await fetchHamster(setHamster1);
                await fetchHamster(setHamster2, hamster1);

            }

        }
        
        getHamsters();


    }, [params, hamster1])

    return (
        <>
        <h2>Battle</h2>
        <article className="cardContainer"> 
            {hamster1.id && hamster2.id
            ? <><section 
                    className="hamsterCard"
                    onClick={() => (handleWinnerClick(hamster1, hamster2))}>
                <img alt={"Hamster "+ hamster1.id} src={`/api/assets/${hamster1.imgName}`}></img>
                <p>{hamster1.name}</p>
            </section>
            <section className="hamsterCard" onClick={() => (handleWinnerClick(hamster2, hamster1))}>
                <img alt={"Hamster "+ hamster2.id} src={`/api/assets/${hamster2.imgName}`}></img>
                <p>{hamster2.name}</p>
            </section></>
            : <><section className="loadInfo">
                    Waiting for hamster
                </section></>} 
        </article>
        </>
    )
}

export default Battle;
