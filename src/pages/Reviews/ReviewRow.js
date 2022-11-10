import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
const ReviewRow = ({ reviewItem, handleDelete, removeService }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { serviceName, review, email, _id } = reviewItem;

    return (
        <tr>
            <td><Button onClick={() => handleDelete(_id)} variant="light">Delete</Button>
            </td>
            <td>
                <Button variant="light" onClick={handleShow}>
                    Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body> <p className='text-center'>{review}</p> </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
            <td>{serviceName}</td>
            <td>{review}</td>
            <td>{email}</td>
        </tr>

    );
};

export default ReviewRow;