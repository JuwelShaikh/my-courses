import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='md:w-2/3 border-2 my-5'> 
            <h2 className="text-xl">Total courses: {courses.length}</h2>
            <div>
                {
                    courses.map(course => <Course key={course.id} course={course}/>)
                }
            </div>
        </div>
    );
};

export default Courses;