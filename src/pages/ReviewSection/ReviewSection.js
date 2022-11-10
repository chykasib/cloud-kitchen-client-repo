import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const ReviewSection = ({ _id, name }) => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(error => console.error(error))
    }, [user?.email])
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const review = form.review.value;
        const reviews = {
            service: _id,
            serviceName: name,
            email: user?.email,
            review

        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('cloud-token')}`
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset('')
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <div>
                {
                    user?.email ?
                        <div>
                            <Card className='container w-50 my-5' style={{ width: '18rem' }}>
                                <div className="d-flex m-2">
                                    <div className='me-3'>
                                        <Image
                                            roundedCircle
                                            src={user?.photoURL
                                            }
                                            style={{ height: '50px' }}
                                        >
                                        </Image>
                                    </div>
                                    <div className='pt-2'>
                                        <b>{user?.displayName
                                        }</b>
                                    </div>
                                </div>
                                <h4>Your Review</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="m-3 ps-3 pt-3 fs-5" controlId="text">
                                        <Form.Control as="textarea"
                                            required
                                            name='review'
                                            type="text"
                                            placeholder="What do you think about this service?"
                                        />
                                    </Form.Group>
                                    <Button className='my-3' type="submit" variant="dark">Submit</Button>
                                </Form>
                            </Card>
                        </div> :
                        <div className="mb-5">
                            <Link to={'/login'}><Button className='text-center' variant="dark"><p>Please login to add a review</p></Button>
                            </Link>
                        </div>
                }
            </div>
            <div>
                {
                    reviews.map(review =>
                        <div className='text-center container ps-5 py-3'>
                            <div className="d-flex m-2">
                                <div className='me-3'>
                                    <Image
                                        roundedCircle
                                        src={user?.photoURL}
                                        style={{ height: '50px' }}
                                    >
                                    </Image>
                                </div>
                                <div className='pt-2'>
                                    <b>{user?.displayName}</b>
                                </div>
                            </div>
                            <p className='text-start py-3'>{review.review}</p>
                        </div>

                    )
                }
            </div>
            <hr />
            <div>
                <div className='text-center container ps-5 py-3'>
                    <div className="d-flex m-2">
                        <div className='me-3'>
                            <Image
                                roundedCircle
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42PstZAFutxRe6viCXLd-IUWiC2oNP9cyCQ&usqp=CAU'
                                style={{ height: '50px' }}
                            >
                            </Image>
                        </div>
                        <div className='pt-2'>
                            <b>MariStewart</b>
                        </div>
                    </div>
                    <p className='text-start py-3'>I had to substitute canola oil for teaspoon of coconut oil, didn’t have the chilies 🌶 so used chili sesame oil tsp just because my 9 yr old doesn’t like too much heat, and it turned out wonderfully delicious! I did partially cook the shrimp on its own with its own garlic etc, then finished it off right before throwing in the cooked noodles into the pan with the shrimp after adding the egg garlic sauce. Tasted amazing!</p>
                </div>
            </div>
            <hr />
            <div>
                <div className='text-center container ps-5 py-3'>
                    <div className="d-flex m-2">
                        <div className='me-3'>
                            <Image
                                roundedCircle
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe53_fTb7APb23Q25S_PlWHuGWfguyzVWJKA&usqp=CAU'
                                style={{ height: '50px' }}
                            >
                            </Image>
                        </div>
                        <div className='pt-2'>
                            <b>Alan Worker</b>
                        </div>
                    </div>
                    <p className='text-start py-3'>Family liked it, instructions are okay so far. I watched the video and it's very helpful.
                        I couldn't see number of servings with the total calories.</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewSection;