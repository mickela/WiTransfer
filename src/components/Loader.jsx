import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const Loader = (props) => {
    // use setInterval to change spinner variant every 2 seconds
    return (
        <Modal show={props.show} onHide={()=> null}>
            <Modal.Body>
                <div className="text-center">
                    <Spinner variant="info" animation="border" />
                    <span className="d-block badge badge-pill badge-info">Loading...</span>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Loader;