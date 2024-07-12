import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course }) => {

    const { course_name, course_details, price, cover, time } = course;

    return (
        <div className='bg-gray-300  shadow rounded-md p-3 items-center border-black'>
            <img src={cover} alt="cover of the course name" />
            <h2 className="text-lg font-bold">{course_name}</h2>
            <p className="h-36 mt-2 py-3 px-1 bg-white rounded-md">{course_details}</p>
            <div className="flex justify-between my-4">
                <p className="flex items-center"><FiDollarSign /> price: {price}</p>
                <p className="flex items-center"><IoBookOutline/> Credit: {time}</p>
            </div>
            <button className="w-full bg-blue-500 rounded-md p-2 font-semibold">Select</button>
        </div>
    );
};

export default Course;