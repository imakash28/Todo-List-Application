import React, { useState } from "react";
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';


const App = () => {

const [todo, setTodo] = useState(""); // For Single todo
const [todos, setTodos] = useState([]); // For multiple todos so this state is going to be an array 
const [editId, setEditId] = useState(0);

// We have used this handleSubmit function to update the todo list
const handleSubmit = (e) => {
e.preventDefault();   // Here, we are using preventDefault() to avoid the page to be refresh

if(editId){
  const editTodo = todos.find((i) => i.id ===editId);
  const updatedTodos = todos.map((t) => t.id === editTodo.id ? (t={id:t.id,todo}): {id:t.id,todo:t.todo} );
  setTodos(updatedTodos);
  setEditId(0);
  setTodo("");
  return;

/* 
  It's "t.id === editTodo.id" going to check if the id of this "editTodo" is matches with the id that we are trying
  to find,once it find the todo that we are trying to edit so it's the todo that you are tring to update if it said 
  "yes" then we are going to provide the originalId and the original todo "(t={id:t.id,todo})" whatever is written 
  inside the input block otherwise we just just going to provide the normal id and todo "{id:t.id,todo:t.todo}"
*/
 
};

if(todo!==''){
  setTodos([{id:`${todo}~${Date.now()}` ,todo},...todos]);  /*${todo}~${Date.now()} : is used to get unique Id for each todo and we are keeping it inside `` to store it in string form* Or we can use UUID() as well to get unique Id*/
  setTodo("");
}
};

const handleDelete = (id) => {
  const deleteTodo=todos.filter((t) =>t.id!==id);
  setTodos([...deleteTodo])

};

// This method is taking the value that to be edit and putting it into the input form and change the Go button into edit button and its updating the editId state
const handleEdit = (id) => {
  const editTodo=todos.find((i) =>i.id === id);
  setTodo(editTodo.todo);
  setEditId(id);
};

return <div className="App">
<div className="container">
  <h1>Todo List App</h1>
 <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo}/>
 <TodoList handleDelete={handleDelete} todos={todos} handleEdit={handleEdit}/>
</div>
</div>
};

export default App;

// const App = () => {
// return <div className="App">Hello World</div>
// }

// export default App;



// const App = () => {

// // const arr = [1, 2, 3, 4, 5];

//     const arr = [
//     {
//     id:1,
//     name:"Akash"
//     },
//     {
//     id:2,
//     name:"Sachin"
//     },
//     {
//     id:3,
//     name:"Jigar"
//     },
//     ];

// return <div className="App">
//   {
//         // filter statement
//         //  arr.filter((num) => num !==3)   

//         // map statement
//       //    arr.map((num) => (
//       //  <div>{num} ,</div>
//       // ))

//       // map statement for mutile object array
//       //    arr.map((num) => (
//       //  <div key={num.id}>{num.name} ,</div>
//       // ))
      
//   }
// </div>;
// };
// export default App;

/*We are going to learn about the map and filter function in react using this todo app.*/

/*-------------------- map() Function ------------------------------------*/
/*
So, let's create a array for that

const App = () => {

const arr = [1, 2, 3, 4, 5];
return <div className="App">
  {
    If I want to print that array so this is someting called map(map is a funtion) in react it work as a for loop, 
    map function takes one arguement like num and we will print num inside a div tag

    arr.map((num) => (
      <div>{num}</div>
      ))
  }
</div>;
};
export default App;
*/

/*---------------------------Filter() function-------------------------------------*/ 

/*
Filter as the name suggest its going to filter so what it will going to filter lets suppose we have a
arr=[1,2,3,4,5] I don't want to print 3 while printing the array so 
const App = () => {

    const arr = [1, 2, 3, 4, 5];

return <div className="App">
  {
     arr.filter((num) =>num !==3)
  }
</div>;
};
export default App;
*/


/*------------------------------------map funtion for Multiple object Array--------------------------------*/

/*

const App = () => {
So, Above we have learnt about the normal array. Now let's suppose we have a array in which one array can have multiple values like:
    const arr = [
    {
    id:1,
    name:"Akash"
    },
    {
    id:2,
    name:"Sachin"
    },
    {
    id:3,
    name:"Jigar"
    },
    ];
So, this is the array of 3 objects and n number of array we can put inside it. so lets print it with the help of map

return ( 
        <div className="App"> {
          arr.map((num) => {
            return <div key={num.id}>{num.naame} ,</div>;
        })
    //  arr.filter((num) =>num !==3)
  }
</div>;
);
};
export default App;
*/