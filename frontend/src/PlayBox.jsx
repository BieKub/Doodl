import React, {useState} from 'react'
import ChooseAvatar from './ChooseAvatar'
import { useNavigate } from "react-router-dom";

function PlayBox(){

    const [name, setName] = useState("")

    const navigate = useNavigate();

    function goNext(){
        navigate("/play")
    }


    return(
        <>
        <div>
            <ChooseAvatar></ChooseAvatar>
            <input value={name} placeholder='Enter your name'></input>
            <button onClick={goNext}>Join</button>
            <button>Create Room</button>
        </div>
        </>
    )
}

export default PlayBox