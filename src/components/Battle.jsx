import React, { useState, useEffect } from "react";
// import HamsterCard from "./HamsterCard";
import {fetchHamster} from "./helpers/randomHamster.js";
import {fetchIdHamster} from "./helpers/idHamster.js"
import './battle.css';
import { useParams } from "react-router-dom";

function Battle() {

    const [hamster1, setHamster1] = useState({});
    const [hamster2, setHamster2] = useState({});
    
    const params = useParams();
    // const [winner, setWinner] = useState(null);

    useEffect(() => {

        async function getHamsters() {

            if(params.id1 && params.id2) {
                
                fetchIdHamster(setHamster1, params.id1);
                fetchIdHamster(setHamster2, params.id2);

            } else {
                
                await fetchHamster(setHamster1);
                await fetchHamster(setHamster2, hamster1.id);

            }

        }
        
        getHamsters();

    // eslint-disable-next-line
    }, [params])

    return (
        <>
        <h2>Battle</h2>
        <article className="cardContainer"> 
            {hamster1 && hamster2
            ? <><section className="hamsterCard">
                <img alt={"Hamster "+ hamster1.id} src={`http://localhost:1234/api/assets/${hamster1.imgName}`}></img>
                <p>{hamster1.name}</p>
            </section>
            <section className="hamsterCard">
                <img alt={"Hamster "+ hamster2.id} src={`http://localhost:1234/api/assets/${hamster2.imgName}`}></img>
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
