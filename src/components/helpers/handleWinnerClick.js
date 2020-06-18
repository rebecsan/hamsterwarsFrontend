export const handleWinnerClick = async (winner, loser) => {
    console.log('You clicked ' + winner.name + ' and ' + loser.name +' lost');

    try{
        
        const response = await fetch('/api/hamsters/' + winner + 'result', {
            method: 'PUT',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'authorization': process.env.REACT_APP_FIREBASE_KEY},
            body: JSON.stringify({
                'wins': 1
            })
        });
        const data = await response.json();
        console.log(data);
        return data;
    
    } catch (e) {

        console.log('Upload failed, ', e);
        return null;

    }
}