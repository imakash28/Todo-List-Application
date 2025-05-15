import React from 'react';

// Method 1: Using Javascript Es6 destructuring funtion




// const TodoForm = ({handleSubmit,todo,editId,setTodo}) => {
//     return (
//         <form className="todoForm" onSubmit={handleSubmit}>
//         <input type="text" 
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}/>
//         <button>{editId ? "Edit" : "Go"}</button>
//         </form>
//     );
// };

// Method 2: Using props

const TodoForm = (props) => {
    return (
        <form className="todoForm" onSubmit={props.handleSubmit}>
        <input type="text" 
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}/>
        <button>{props.editId ? "Edit" : "Go"}</button>
        </form>
    );
};
export default TodoForm;