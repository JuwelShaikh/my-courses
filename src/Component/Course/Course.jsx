import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course }) => {

    const { course_name, course_details, price, cover, time } = course;

    return (
        <div className='border-2 p-3 items-center border-black'>
            <img src={cover} alt="cover of the course name" />
            <h2 className="text-lg font-bold">{course_name}</h2>
            <p className="text-wrap">{course_details}</p>
            <div className="flex justify-between my-4">
                <p className="flex"><FiDollarSign /> price: {price}</p>
                <p className="flex"><IoBookOutline/> Credit: {time}</p>
            </div>
            <button className="w-full bg-blue-500 rounded-md p-2 font-semibold">Select</button>
        </div>
    );
};

export default Course;