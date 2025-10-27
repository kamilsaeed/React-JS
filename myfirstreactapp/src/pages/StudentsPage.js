import { useState } from "react"

const StudentsPage = () => {

    const [students, setStudents] = useState([]);


    return(
        
        <table>
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
                            <td>123</td>
                            <td>Hayyan g</td>
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
    )
}

export default StudentsPage