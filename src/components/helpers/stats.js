const fetchTotalGames = async (setTotalGames) => {
            
    try {
        
        const url = '/api/stats/total';
        const response = await fetch(url);
        const json = await response.json();
        await setTotalGames(json);
        
    } catch(e) {
        
        console.log('Fetching number of games failed because ', e)
        
    }
}

const fetchTopHamsters = async (setTopFive) => {
    
    try {
        
        const url = '/api/charts/top';
        const response = await fetch(url);
        const json = await response.json();
        await setTopFive(json);
        
    } catch(e) {
        
        console.log('Fetching top 5 failed because ', e)
        
    }
}

const fetchBottomHamsters = async (setBottomFive) => {
    
    try {
        
        const url = '/api/charts/bottom';
        const response = await fetch(url);
        const json = await response.json();
        await setBottomFive(json);
        
    } catch(e) {
        
        console.log('Fetching top 5 failed because ', e)
        
    }
}

export {fetchTotalGames, fetchTopHamsters, fetchBottomHamsters};