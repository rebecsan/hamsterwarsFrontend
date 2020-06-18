export const postNewGame = async (winner, loser) => {

    const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'authorization': process.env.REACT_APP_FIREBASE_KEY},
        body: JSON.stringify({
            'contestants': [
               { 'contestant1': winner.id },
               { 'contestant2': loser.id }
            ],
            'winnerId': winner.id
        })
    }

    try{
        const response = await fetch('/api/games', requestOptions);
        console.log('game response', response);
        const data = await response.json();
        console.log('game data', data);
        return data;
    
    } catch (e) {

        console.log('Upload failed, ', e);
        return null;

    }