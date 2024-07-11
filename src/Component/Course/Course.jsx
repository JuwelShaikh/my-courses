import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course }) => {

    const { course_name, course_details, price, cover, time } = course;

    return (
        <div className=''>
            <img src={cover} alt="cover of the course name" />
            <h2 className="text-lg font-bold">{course_name}</h2>
            <p>{course_details}</p>
            <div className="flex">
                <p className="flex"><FiDollarSign /> price: {price}</p>
                <p className="flex"><IoBookOutline/> Credit: {time}</p>
            </div>
        </div>
    );
};

export default Course;