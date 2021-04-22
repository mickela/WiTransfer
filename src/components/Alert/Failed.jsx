import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Failed = (props) =>{

    const [ isOpen, setOpen ] = useState(props.show);

    return(
        <Modal show={props.show} onHide={()=> setOpen(false)}>
            <Modal.Body>
                <span className="d-block text-danger fa-3x">
                    <i className="fas fa-warning" />
                </span>
                <p>
                    {props.msg}
                </p>
            </Modal.Body>
        </Modal>
    )
}

export default Failed;