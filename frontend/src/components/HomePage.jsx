import React, { useState } from 'react';
import {v4 as uuidV4}from 'uuid';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    const [roomId,setRoomId] = useState('');
    const [username,setUsername] = useState('');
    const createNewRoom = (event)=>{
        event.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success("Created a new room");
    }
    const joinRoom = ()=>{
        if(!roomId||!username){
            toast.error('you need room id and username');
            return;
        }
        navigate(`/editor/${roomId}`,{
            state :{
                username,
            }
        });
    }
    const handleEnter = (e)=>{
        if(e.code=='Enter'){
            joinRoom();
        }
    }
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <h4 className="mainLabel">Paste invitation ROOM ID </h4>
            <div className="inputGroup">
                <input onKeyUp = {handleEnter} onChange = {(e)=>{setRoomId(e.target.value);}} value = {roomId} type="text" className="inputBox" placeholder="ROOM ID" />
                <input onKeyUp = {handleEnter} onChange = {(e)=>{setUsername(e.target.value);}} value = {username} type="text" className="inputBox" placeholder="USERNAME" />
                <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                <span className="createInfo">
                    If you don't have invite then create &nbsp;
                    <a onClick = {createNewRoom}href="" className="createNewBtn">new room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4> This is my footer 😊</h4>
        </footer>
    </div>
  )
}

export default HomePage