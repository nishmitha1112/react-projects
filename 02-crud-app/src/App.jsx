import { useState } from 'react';
function App(){
  const[students,setStudents]=useState([]);
  const[formData,setFormData]= useState({
    name:"",
    roll:"",
    branch:"",
  });
  const[editingStudentId,setEditingStudentId]=useState(null);

  const handleChange=(e)=>{
    const{ name,value }=e.target;

    setFormData({
      ...formData,
      [name]:value,
    });
    };

  const addStudent =(e)=>{
    e.preventDefault();
     if(editingStudentId===null){
    
    const newStudent={
      id:students.length+1,
      name:formData.name,
      roll:formData.roll,
      branch:formData.branch,
    };
    setStudents([...students,newStudent])
  }
  else{
    const updatedStudents = students.map((student)=>
      student.id===editingStudentId?{ ...student, ...formData}:student
    );
    setStudents(updatedStudents);
    setEditingStudentId(null);
  }
    setFormData({
      name:"",
      roll:"",
      branch:"",
    });
  };
  const updateStudent =(student)=>{
   setFormData({
    name:student.name,
    roll:student.roll,
    branch:student.branch,
   });
   setEditingStudentId(student.id);
  };
  const deleteStudent =(id)=>{
    const remainingStudents = students.filter((student)=>student.id!==id);
  
  setStudents(remainingStudents);
  };
  return(
  <div>
    <h1>Student CRUD APP</h1>
    <p>Total students:{students.length}</p>
    {/*FORM*/}
  <form onSubmit={addStudent}>
      <input 
      type="text"
      placeholder="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      />
      <input
      type="text"
      placeholder="RollNumber"
      name="roll"
      value={formData.roll}
      onChange={handleChange}/>
      <input
      type="text"
      placeholder="Branch"
      name="branch"
      value={formData.branch}
      onChange={handleChange}
      />
      <button type="submit">{editingStudentId===null?"Add Student":"Update student"}Student</button>
  </form>


    {/*STUDENT LIST*/}
 <ul>
  {students.map((student)=>(
    <li key={student.id}>
          {student.name}-{student.roll}-{student.branch}
          <button onClick={()=>updateStudent(student)}>Edit</button>
          <button onClick={()=>deleteStudent(student.id)}>Delete</button>
    </li>
  ))}
 </ul>
  </div>
  );
}
export default App;