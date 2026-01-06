import { useState } from "react";

function App() {
  // =========================
  // STATE
  // =========================
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    branch: "",
  });
  const [editingStudentId, setEditingStudentId] = useState(null);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =========================
  // ADD + UPDATE STUDENT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStudentId === null) {
      // ADD MODE
      const newStudent = {
        id: students.length + 1,
        name: formData.name,
        roll: formData.roll,
        branch: formData.branch,
      };
      setStudents([...students, newStudent]);
    } else {
      // UPDATE MODE
      const updatedStudents = students.map((student) =>
        student.id === editingStudentId
          ? { ...student, ...formData }
          : student
      );
      setStudents(updatedStudents);
      setEditingStudentId(null);
    }

    // Clear form
    setFormData({
      name: "",
      roll: "",
      branch: "",
    });
  };

  // =========================
  // EDIT STUDENT
  // =========================
  const editStudent = (student) => {
    setFormData({
      name: student.name,
      roll: student.roll,
      branch: student.branch,
    });
    setEditingStudentId(student.id);
  };

  // =========================
  // DELETE STUDENT
  // =========================
  const deleteStudent = (id) => {
    const remainingStudents = students.filter(
      (student) => student.id !== id
    );
    setStudents(remainingStudents);
  };

  // =========================
  // UI
  // =========================
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student CRUD App</h1>
      <p>Total students: {students.length}</p>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Roll Number"
          name="roll"
          value={formData.roll}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          {editingStudentId === null ? "Add Student" : "Update Student"}
        </button>
      </form>

      <hr />

      {/* STUDENT LIST */}
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.roll} - {student.branch}{" "}
            <button onClick={() => editStudent(student)}>Edit</button>{" "}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
