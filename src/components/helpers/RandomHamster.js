export const fetchHamster = async (setHamster, hamster1Id) => {
    
    try {
        
        const url = '/api/hamsters/random';
        let json = {};

        do {

            const response = await fetch(url);
            json = await response.json();
            await setHamster({ 
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

        } while (hamster1Id === json.id)

    } catch(e) {
        
        console.log('Fetching random hamster failed because ', e)
    
    }
}
