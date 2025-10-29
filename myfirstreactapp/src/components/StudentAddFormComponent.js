import { useState } from "react"

const StudentAddFormComponent = () => {

    const [student, setStudent] = useState({
        rollNumber: 0,
        studentName: " "
    })

    const setValueFromInputField = (value, field_name) => {

        setStudent({
            ...student,
            [field_name]: value
        });

        // if(field_name === "studentname")
        // {
        //     setStudent({
        //             ...student,
        //             studentName: value
        //     })
        // }
        // else
        // {
        //     setStudent({
        //             ...student, 
        //             rollNumber: value
        //     })
        // }

    }

    return(
        <center style={styles.center}>
            <h1>RollNumber: {student.rollNumber}</h1>
            <h1>StudentName: {student.studentName}</h1>
            <div>
                <label>Student Roll Number</label>
                <input type="text" 
                        placeholder="Roll Number" 
                        style={styles.myinputfield} 
                        onChange={(event) => setValueFromInputField(event.target.value, "rollNumber")}
                        value={student.rollNumber}
                ></input>
            </div>

            <div>
                <label>Student Name</label>
                <input type="text" 
                        placeholder="Student Name" 
                        style={styles.myinputfield} 
                        onChange={(event) => setValueFromInputField(event.target.value, "studentName")}
                        value={student.studentName}
                ></input>
            </div>

            <div>
                <button>Add Student</button>
            </div>
        </center>
    )
}

const styles = {
    "center": {
                marginTop: 20,
                backgroundColor: "orange"
            },

    "myinputfield": {
        width: "40",
        padding: 8,
        margin: 4
    }
}

export default StudentAddFormComponent 