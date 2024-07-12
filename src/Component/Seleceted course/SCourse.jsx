import SlCourse1 from "../SlCourse1/SlCourse1";


const SCourse = ({ SlCourse }) => {



    return (
        <div className="">
            <h1>length: {SlCourse.length}</h1>
            <div>
                {
                    SlCourse.map(SlC => <SlCourse1 SlC={SlC} key={SlC.id}/>)
                }
            </div>
        </div>
    );
};

export default SCourse;