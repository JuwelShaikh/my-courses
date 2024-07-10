import { useEffect } from "react";
import { useState } from "react";


const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl">Total courses: {courses.length}</h2>
        </div>
    );
};

export default Courses;