import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Table from 'react-bootstrap/Table';
import ReviewRow from './ReviewRow';
import useTitle from '../../Hooks/UseTitle';
const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Reviews')
    useEffect(() => {
        fetch(`https://cloud-server-delta.vercel.app/reviews?email=${user?.email}`,
            {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('cloud-token')}`
                // }
            })
            .then(res =>
                res.json()
            )
            .then(data => {

                setReviews(data)
            })
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`https://cloud-server-delta.vercel.app/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('cloud-token')}`
            }
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
        fetch(`https://cloud-server-delta.vercel.app/reviews/${id}`, {
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
                reviews.length === 0 ?
                    <p className=' py-5 fs-1'>No reviews were added</p>

                    :
                    <Table className='text-center container m-5'>
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
                            <>
                                {
                                    reviews?.map(review => <ReviewRow key={review._id} reviewItem={review} handleDelete={handleDelete}></ReviewRow>)
                                }
                            </>
                        </tbody>
                    </Table>
            }
        </div>

    );
};

export default Reviews;