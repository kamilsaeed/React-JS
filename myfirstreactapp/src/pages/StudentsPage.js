import { useState, useEffect } from "react"
import StudentAddFormComponent from "../components/StudentAddFormComponent"

const StudentsPage = () => {

    const [students, setStudents] = useState([]);

    const AddStudenttoState = (student) => {
        setStudents([...students,student])
    }

    useEffect(() => {
        setTimeout(() => {
            let student = {
                rollNumber: 1234,
                studentName: "Kamil"
            };
            setStudents(prevStudents => [...prevStudents,student])
        }, 5000)
    },[])

    return(
        
    <>
    <center>
        <StudentAddFormComponent addstudent = {AddStudenttoState}/>
        <table border={1} style={{
            marginTop: 30
        }}>
            <thead>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Delete</th>
            </thead>

        {students.length > 0 ? 
            <tbody>
                {students.map((std, index) => {
                    return (
                        <tr>
                            <td>{std.rollNumber}</td>
                            <td>{std.studentName}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                }
                )}
                
            </tbody>

            : <h1>No student found</h1>
        }
        </table>
    </center>
    </>
    )
}

export default StudentsPage