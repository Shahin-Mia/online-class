import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseItem = (props) => {
    const { title, price, img } = props.courses;
    console.log(title);

    const style = {
        width: '20rem',
        margin: '20px',
        display: 'inline-block',
        boxShadow: '1px 1px 8px lightgrey',
        border: 'none'
    }
    return (

        <Card style={style}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Price: ${price}</Card.Text>
                <Button variant="success">Enroll Now</Button>
            </Card.Body>
        </Card>

    );
};

export default CourseItem;