import React, { useState } from 'react';
import fakeData from '../../fakeData/courses';
import CourseItem from '../Card/CourseItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css';

const Course = () => {
    const data = fakeData;
    const [courses, setCourses] = useState(data);

    return (
        <div className="container">
            <h3 className='title'>Courses</h3>
            {
                courses.map(course => <CourseItem key={course.id} courses={course}></CourseItem>)
            }
        </div>
    );
};

export default Course;