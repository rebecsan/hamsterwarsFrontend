import React from "react";
import './UploadHamster.css';

function UploadHamster() {

    return (
        <section>
            <h2>Upload hamster</h2>
            <form>
                <label>Name</label>
                <input placeholder="Enter name"></input>
                <label>Age</label>
                <input placeholder="Enter age in years"></input>
                <label>Loves</label>
                <input placeholder="What does the hamster love to do?"></input>
                <label>Image</label>
                <input placeholder="Enter image name"></input>
                <button>Add to database</button>
            </form>
        </section>
    )

}

export default UploadHamster;
