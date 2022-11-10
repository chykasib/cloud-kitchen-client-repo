import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Table from 'react-bootstrap/Table';
import ReviewRow from './ReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/UseTitle';
const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const removeService = () => toast("service is added successfully");
    useTitle('Reviews')
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('review successfully deleted')
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining)
                }

            })
    }

    const HandleUpdateReview = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    const item = 'no review added'
    return (
        
            <Table className='text-center container m-5'>
                            {
                                    <>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Service Name</th>
                                                <th>Review</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                reviews.map(review => <ReviewRow key={review._id} reviewItem={review} handleDelete={handleDelete} removeService={removeService}></ReviewRow>)
                                            }
                                        </tbody>
                                    </>
                            }
                        </Table>
       
    );
};

export default Reviews;