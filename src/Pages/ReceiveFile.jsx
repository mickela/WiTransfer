import React from 'react'
import { Link } from 'react-router-dom'

function ReceiveFile() {
    return (
        <div>
            <h1>ReceiveFile</h1>
            <Link to="/">Home</Link> <br/>
            <Link to="/send">SendFile</Link>
        </div>
    )
}

export default ReceiveFile
