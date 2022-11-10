import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Table from 'react-bootstrap/Table';
import ReviewRow from './ReviewRow';
const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
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
                    alert('review successfully deleted')
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
    return (
        <div>
            {
                reviews.map(review =>
                    <>
                        <Table className='text-center container m-5'>
                            {
                                review.length === 0 ?
                                    <thead>
                                        <h1 className='my-5'> no item found</h1>

                                    </thead>
                                    :
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
                                                reviews.map(review => <ReviewRow key={review._id} reviewItem={review} handleDelete={handleDelete}></ReviewRow>)
                                            }
                                        </tbody>
                                    </>
                            }
                        </Table>
                    </>
                )

            }
        </div>
    );
};

export default Reviews;