import React from 'react';
import { Button } from 'react-bootstrap';
const ReviewRow = ({ reviewItem, handleDelete }) => {
    const { serviceName, review, email, _id } = reviewItem;

    return (
        <tr>
            <td><Button onClick={() => handleDelete(_id)} className='w-100' variant="dark">Delete</Button>
            </td>
            <td>{serviceName}</td>
            <td>{review}</td>
            <td>{email}</td>
            <td><Button className='w-100' variant="light">Edit</Button></td>
        </tr>

    );
};

export default ReviewRow;