import SlCourse1 from "../SlCourse1/SlCourse1";


const SCourse = ({ SlCourse, cTime, cPrice }) => {



    return (
        <div className="w-1/4 items-center my-16  mx-2">

            <div className="my-3 bg-gray-300 shadow rounded-md p-3 items-center">
                <h1 className="text-lg my-2 border-b-2 border-black">Credit hours: {cTime}</h1>
                {
                    SlCourse.map(SlC => <SlCourse1 SlC={SlC} key={SlC.id} />)
                }
                <p className="border-t-2 mt-2 border-black">Total price: {cPrice} </p>
            </div>
            <div>
            </div>
        </div>
    );
};

export default SCourse;