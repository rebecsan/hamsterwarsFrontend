export const fetchHamster = async (setHamster) => {
    try {
        
        const url = '/api/hamsters/random';
        const response = await fetch(url);
        //console.log('FetchHamster', await response.text())
        const json = await response.json();
        //console.log('fetchHamster', json);
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

        // while (hamster1Id === json.id) {
        //     console.log('Hämtar ny hamster');
        //     const response = await fetch(url);
        //     const json = await response.json();
        //     console.log('Sparar ny random hamster2 ' + json.name);
        //     setHamster({ 
        //         age: json.age,
        //         favFood: json.favFood,
        //         id: json.id,
        //         imgName: json.imgName,
        //         wins: json.wins,
        //         defeats: json.defeats,
        //         games: json.games,
        //         loves: json.loves,
        //         name: json.name
        //     });
        // }

    } catch(e) {
        
        console.log('Fetching random hamster failed because ', e)
    
    }
}
