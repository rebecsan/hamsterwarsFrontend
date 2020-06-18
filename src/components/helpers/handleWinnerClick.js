export const handleWinnerClick = async (winner, loser) => {
    console.log('You clicked ' + winner.name + ' and ' + loser.name +' lost');

    try{
        
        const responseWinner = await fetch('/api/hamsters/' + winner.id + '/result', {
            method: 'PUT',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'authorization': process.env.REACT_APP_FIREBASE_KEY},
            body: JSON.stringify({
                'wins': 1
            })
        });

        const responseLoser = await fetch('/api/hamsters/' + loser.id + '/result', {
            method: 'PUT',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'authorization': process.env.REACT_APP_FIREBASE_KEY},
            body: JSON.stringify({
                'defeats': 1
            })
        });

        const winnerData = await responseWinner.json();
        const loserData = await responseLoser.json();

        return console.log('Winner ', winnerData, 'Loser ', loserData);
    
    } catch (e) {

        console.log('Upload failed, ', e);
        return null;

    }
}