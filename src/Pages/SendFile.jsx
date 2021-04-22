import React from 'react'
import { Link } from 'react-router-dom'

function SendFile() {
    return (
        <div>
            <h1>SendFile</h1>            
            <Link to="/">Home</Link> <br/>
            <Link to="/receive">ReceiveFile</Link>
        </div>
    )
}

export default SendFile
