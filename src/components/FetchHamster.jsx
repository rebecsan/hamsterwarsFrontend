import React, { useState, useEffect } from "react";

function fetchHamster() {

    const [hamster, setHamster] = useState(null);
    const url = '/api/hamsters/:id';

    useEffect(() => {
        async function fetchHamster() {
            try {

                const response = await fetch(url);
                const json = await response.json();
                setHamster({ 
                    age: json.age,
                    favFood: json.favFood,
                    id: json.id,
                    imgName: json.imgName,
                    wins: json.wins,
                    defeats: json.defeats,
                    games: json.games,
                    loves: json.loves,
                    name: json.name
                });
            } catch(e) {
                console.log('Fetching hamster failed because ', e)
            }
        }
        fetchHamster();
    }, [])

    return (
        <section> {hamster
            ?   <><img alt={"Hamster "+ hamster.id} src={`http://localhost:1234/api/assets/${hamster.imgName}`}></img>
                <p>{hamster.name}</p></>
            : 'no hamster'} 
        </section>
    );

}

export default fetchHamster;
