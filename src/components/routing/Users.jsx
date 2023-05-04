import {useState} from 'react';
import axios from 'axios';
import userdata from '../staticdata/Users.json';


function getUsers() {
    document.getElementById("myButton").onclick = function () {
        location.href = "www.yoursite.com";
    };
}

const users = () => {
    <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.name}</td>
                    <td>{e.address}</td>
                </tr>
            </tbody>
        </table>
        <button id="userpage-button">Go to profile</button>
        <button onclick="window.location.href='/Users/:id/:username';">Go to profile</button>
    </>
}