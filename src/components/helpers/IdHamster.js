export const fetchIdHamster = async (setHamster, hamsterId) => {
    try {
        
        const url = '/api/hamsters/' + hamsterId;
        const response = await fetch(url);
        //console.log('FetchIdHamster', await response.text())
        const json = await response.json();
        //console.log('fetchIdHamster', json);
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
