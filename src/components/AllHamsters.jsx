import React, {useState} from 'react';

function AllHamsters() {

    const [hamsters, setHamsters] = useState(null);
    const handleClick = async() => {
        let hamsterArray = await getHamsters();
        setHamsters(hamsterArray);
    }
    
    return (
        <div>
            <p>
                <button onClick={handleClick}>Get hamsters</button>
            </p>
            <img alt="hamster-32" src="http://localhost:1234/api/assets/hamster-32.jpg"></img>
            <ul>
                {hamsters
                    ? hamsters.map(hamster => (
                        <li key={hamster.id}>Hamstern heter{hamster.name}</li> ))
                    :null }
            </ul>
        </div>
    );
}

async function getHamsters() {

    try{

        const response = await fetch('/api/hamsters');
        const hamsterArray = await response.json();
        return hamsterArray;
    
    } catch (e) {

        console.log('Fetch failed, ', e);
        return null;

    }
}

export default AllHamsters;
