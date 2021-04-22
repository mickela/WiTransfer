import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () =>{
    return(
        <div className="">
            <h1>Landing</h1>
            <Link to="/send">SendFile</Link> <br/>
            <Link to="/receive">ReceiveFile</Link>
        </div>
    )
}

export default Landing;