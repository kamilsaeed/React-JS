import { useState, useEffect } from "react"
import StudentAddFormComponent from "../components/StudentAddFormComponent"

const StudentsPage = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            let student = {
                roll_number: 1234,
                student_name: "Kamil"
            };
            setStudents(prevStudents => [...prevStudents,student])
        }, 5000)
    },[])

    return(
        
    <>
    <center>
        <StudentAddFormComponent />
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
                            <td>{std.roll_number}</td>
                            <td>{std.student_name}</td>
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