import React from 'react';
import Card from 'react-bootstrap/Card';
const Banner = () => {
  return (

    <div className="container">
      <Card className="bg-dark text-white">
        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixATlcp8xpKvuXnzRqm19VWh7XSGigfuBOg&usqp=CAU" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            <p className='text-center fs-1 pt-5'>Welcome to the Rock Cloud Kitchen</p>
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>

  );
};

export default Banner;