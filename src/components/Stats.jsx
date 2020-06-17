import React, { useState, useEffect } from "react";

function Stats() {
    
    const [totalGames, setTotalGames] = useState(null);
    const [topFive, setTopFive] = useState(null);
    const [bottomFive, setBottomFive] = useState(null);
    
    useEffect(() => {

        const fetchTotalGames = async () => {
            
            try {
                
                const url = '/api/stats/total';
                const response = await fetch(url);
                // console.log('FetchStats:', await response.text())
                const json = await response.json();
                //console.log('fetchIdHamster', json);
                setTotalGames(json);
                console.log(json);
                
            } catch(e) {
                
                console.log('Fetching number of games failed because ', e)
                
            }
        }

        const fetchTopHamsters = async () => {
            
            try {
                
                const url = '/api/charts/top';
                const response = await fetch(url);
                const json = await response.json();
                setTopFive(json);
                console.log(json);
                
            } catch(e) {
                
                console.log('Fetching top 5 failed because ', e)
                
            }
        }

        const fetchBottomHamsters = async () => {
            
            try {
                
                const url = '/api/charts/bottom';
                const response = await fetch(url);
                const json = await response.json();
                setTopFive(json);
                console.log(json);
                
            } catch(e) {
                
                console.log('Fetching top 5 failed because ', e)
                
            }
        }
        
        fetchTotalGames();
        fetchTopHamsters();
        fetchBottomHamsters();

    },[])
    
    return (
        <>
            <h2>Stats</h2>
            <p>Totala antalet matcher: {totalGames}</p>
            {/* <p>Topp fem: {topFive}</p> */}
        </>
    )

}

export default Stats;
