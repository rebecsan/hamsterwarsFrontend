import React, { useState } from "react";
import './UploadHamster.css';

function UploadHamster() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [loves, setLoves] = useState('');
    const [favFood, setFavfood] = useState('');
    const [image, setImage] = useState('');

    async function handleClick(event) {

        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'authorization': process.env.REACT_APP_FIREBASE_KEY},
            body: JSON.stringify({
                'name': name, 
                'age': age, 
                'loves': loves, 
                'favFood': favFood, 
                'imgName': image
            })
        }
    
        try{
            console.log(requestOptions.body, requestOptions.headers, process.env.REACT_APP_FIREBASE_KEY);
            const response = await fetch('/api/upload', requestOptions);
            console.log(response);
            const data = await response.json();
            console.log(data);
            return data;
        
        } catch (e) {
    
            console.log('Upload failed, ', e);
            return null;
    
        }
    }
    
    return (
        <section>
            <h2>Upload hamster</h2>
            <form onSubmit={event => {event.preventDefault();}}>
                <label>Name</label>
                <input value={name} type="text" onChange={event => setName(event.target.value)} placeholder="Enter name"></input>
                <label>Age</label>
                <input value={age} type="text" onChange={event => setAge(event.target.value)} placeholder="Enter age in years"></input>
                <label>Loves</label>
                <input value={loves} type="text" onChange={event => setLoves(event.target.value)} placeholder="What does the hamster love to do?"></input>
                <label>Favourite food</label>
                <input value={favFood} type="text" onChange={event => setFavfood(event.target.value)} placeholder="Enter hamsters favourite food"></input>
                <label>Image</label>
                <input value={image} type="text" onChange={event => setImage(event.target.value)} placeholder="Enter image name"></input>
                <button onClick={handleClick}>Add to database</button>
            </form>
        </section>
    )
}

export default UploadHamster;
