import React from 'react'

const StudentDisplay = (props) => {
    console.log(props);

    //^ Destructing the formdata (student1);
    let { studentData, setStudentData } = props;

    //^ Delete Function
    let Delete = (data) => {
        let update = studentData.filter((student) => {
            return student !== data
        });
        setStudentData(update);
        console.log(data);

    }

    return (
        <div>
            <h1 className='text-center uppercase shadow text-violet-600 text-3xl mb-2'> Display The Data</h1>
            <table className='border p-6 w-[95%] m-10 '>
                <tr className='bg-gray-900 text-white '><th>S.No</th>
                    <th className='text-center p-2 border'>FIRST NAME</th>
                    <th className='text-center p-2 border'>LAST NAME</th>
                    <th className='text-center p-2 border'>EMAIL</th>
                    <th className='text-center p-2 border'>PHONENUMBER</th>
                    <th className='text-center p-2 border'>GENDER</th>
                    <th className='text-center p-2 border'>DOB</th>
                    <th className='text-center p-2 border'>SKILL</th>
                    <th className='text-center p-2 border'>CITY</th>
                    <th className='text-center p-2 border'>ADDRESS</th>
                    <th className='text-center p-2 border'>DELETE</th>
                </tr>
                {studentData.map((student, index) => {
                    return <tr key={index} className='border bg-blue-500 text-white mb-2 hover:bg-blue-700 cursor-pointer'>
                        <td className='text-center p-2 border '>{student.firstName}</td>
                        <td className='text-center p-2 border '>{student.lastName}</td>
                        <td className='text-center p-2 border '>{student.email}</td>
                        <td className='text-center p-2 border '>{student.phonenumber}</td>
                        <td className='text-center p-2 border '>{index + 1}</td>
                        <td className='text-center p-2 border '>{student.gender}</td>
                        <td className='text-center p-2 border '>{student.dob}</td>
                        <td className='text-center p-6 border '>{student.skills.map((skill, index) => {
                            return <span key={index}>
                                <ol>
                                    <li> {index + 1}.{skill}</li>
                                </ol>
                            </span>
                        })}</td>
                        <td className='text-center p-2 border'>{student.city}</td>
                        <td className='text-center p-2 border'>{student.address}</td>
                        <td className='text-center p-2 border'><button
                            className='rounded p-2 text-bold text-white bg-amber-600 hover:bg-amber-300 hover:text-black cursor-pointer'
                            onClick={() => Delete(student)}>
                            Delete</button></td>

                    </tr>
                })}
            </table>
        </div>
    )
}

export default StudentDisplay
