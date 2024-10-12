import React, { useState } from 'react';  
import axios from 'axios';  
  
function AddStudent() {  
  const [name, setName] = useState('');  
  const [age, setAge] = useState('');  
  
  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      await axios.post('/api/students', { name, age });  
      alert('Student added successfully!');  
      // 重置表单或跳转...  
    } catch (error) {  
      console.error('Error adding student:', error);  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit}>  
      // 表单输入字段...  
      <button type="submit">Add Student</button>  
    </form>  
  );  
}  
  
export default AddStudent;