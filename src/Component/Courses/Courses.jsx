import { useEffect } from "react";
import { useState } from "react";


const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Courses;