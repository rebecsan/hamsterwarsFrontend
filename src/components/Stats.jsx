import React, { useState, useEffect } from "react";
import {fetchTotalGames, fetchTopHamsters, fetchBottomHamsters} from "./helpers/stats.js"

function Stats() {
    
    const [totalGames, setTotalGames] = useState(null);
    const [topFive, setTopFive] = useState([]);
    const [bottomFive, setBottomFive] = useState([]);
    
    useEffect(() => {
            
            fetchTotalGames(setTotalGames);
            fetchTopHamsters(setTopFive);
            fetchBottomHamsters(setBottomFive);

    },[])
    
    return (
        <>
            <h2>Stats</h2>
            <h3>Total number of games:</h3>
            <p>{totalGames}</p>
            <section>
                <h3>Most wins</h3>
                <ol>
                    {topFive.map((topHamster) => (
                        <li key={topHamster.id}>{topHamster.name}: {topHamster.wins}</li>
                    ))}
                </ol>
            </section>
            <section>
                <h3>Most defeats</h3>
                <ol>
                    {bottomFive.map((bottomHamster) => (
                        <li key={bottomHamster.id}>{bottomHamster.name}: {bottomHamster.defeats}</li>
                    ))}
                </ol>
            </section>
        </>
    )

}

export default Stats;
