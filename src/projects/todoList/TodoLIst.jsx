import React,{useState} from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// Todo-List App - 1st Version

// Features
// 1. Add Todo
// 2. Edit Todo
// 3. Completed Todo
// 4. Delete Todo

// Algorithm
// 1. Take one input field
// 2. Take one button
// 3. Use check box and ul list for displaying todo
// 4. Use icons for completed and deleted todo

// JavaScript Logic
// 1. Store input value using useState
// 2. 


const ItemTodo = ({item,index,handleCompleted,handleEdit,handleDelete})=>{
   return (
    <li className='flex items-center justify-between'>
    <label className={item.completed ? "line-through":""}>
     <input type="checkbox" onChange={()=>{handleCompleted(index)}} className='mr-1' />
     {item.text}
    </label>
    <span className='flex gap-2 cursor-pointer'>
    {item.completed? "" :<FaEdit onClick={()=>{handleEdit(index)}}/>}
    <MdDelete onClick={()=>{handleDelete()}}/>
    </span>
  </li>
   )
}

const TodoLIst = () => {

  const [todos, setTodos]= useState([]);
  const [inputTodos, setInputTodos] = useState("");
  const [editTodo, setEditTodo] = useState("Add Todo");
  const [editIndex, setEditIndex] = useState(null);

  const addTodoInList = (innerText,index)=>{
    if(innerText === "Add Todo" && inputTodos.trim() != '' ){
      setTodos([...todos, {text: inputTodos, completed: false, editing: false}]);
      setInputTodos("");
    }else{
      const updatedTodo = [...todos];
      updatedTodo[index].text = inputTodos;
      setInputTodos("");
      setEditTodo("Add Todo");
    }
    
  }

  const handleCompleted = (index)=>{
    const updatedTodo = [...todos];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodos(updatedTodo);
  }

  const handleEdit = (index)=>{
    const updatedTodo = [...todos];
    updatedTodo[index].editing = !updatedTodo[index].editing;
    setInputTodos(updatedTodo[index].text);
    setTodos(updatedTodo)
    setEditTodo("Edit Todo");
    setEditIndex(index);
  }

  const handleDelete = (index)=>{
     const updatedTodo = [...todos];
     updatedTodo.splice(index,1);
     setTodos(updatedTodo);
  }
  



  return (
    <div className=' bg-white lg:w-96 rounded-xl px-4 py-5'>
    <div className='border w-full h-10 mb-5 pl-1 rounded-r-xl'>
       <input type="text" placeholder='Add a new todo' className='w-[80%] h-full' value={inputTodos} onChange={(e)=>{setInputTodos(e.target.value)}} />
       <button className='bg-orange-600 h-full w-[20%] hover:bg-orange-800 cursor-pointer rounded-r-xl' onClick={(e)=>{addTodoInList(e.target.innerText,editIndex)}}>{editTodo}</button>
    </div>
    <ul>
       {todos.map((item,index)=>(
        <ItemTodo key={index} item={item} index={index} handleCompleted={handleCompleted} handleEdit={handleEdit} handleDelete={handleDelete}/>
       ))}
    </ul>
    </div>
  )
}

export default TodoLIst