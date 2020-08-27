import React, { useState } from 'react';
import fakeData from '../../fakeData/courses';
import CourseItem from '../Card/CourseItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css';

const Course = () => {
    const data = fakeData;
    const [courses] = useState(data);

    const [cart, setCart] = useState([]);

    const handleAddCourses = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const handleRemoveCourses = () => {
        const removedItem = cart.slice(0, cart.length - 1);
        setCart(removedItem);
    }

    const total = cart.reduce((sum, product) => sum + product.price, 0)
    return (
        <div className="container">
            <div className="courses">
                <h3 className='title'>Courses</h3>
                {
                    courses.map(course => <CourseItem key={course.id} handleAddCourses={handleAddCourses} courses={course}></CourseItem>)
                }
            </div>
            <div className="cart-section">
                <h2>Cart</h2>
                <hr />
                <div className="d-flex justify-content-around">
                    <p>Total Items :</p>
                    <p>{cart.length}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p>Total Price :</p>
                    <p>$<span>{total}</span></p>
                </div>
                <button onClick={handleRemoveCourses} className="btn btn-danger m-3">Remove Item</button>
            </div>
        </div>

    );
};

export default Course;