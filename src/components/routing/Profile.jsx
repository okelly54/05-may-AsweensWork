import React from 'react';
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody
  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
    const [data, setData] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const updateName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const updateId = (e) =>{
        e.preventDefault();
        setId(e.target.value)
    }

    return (
        <>
            <p>Enter album id</p>
            <input type="text" onChange={(e)=>updateId(e)} />
            <p>Enter an album namee</p>
            <input type="text" onChange={(e)=>updateName(e)} />
            <button onClick={(e) => makeRequest(e)}>Search</button>
            
            <h3>{albumdata.name}</h3>

            <p>{photodata.albumId}</p>
            <h3>{photodata.title}</h3>
            <img src={photodata.url}></img>
            
            <ul>
                {photos.map((photo) => (
                    <ul key={albumId}>
                        {photo.title}
                        <img src={photo.url}></img>
                    </ul>
                ))}
            </ul>
        </>
    );
}
export default Profile;