import React, {useState} from 'react';
import {useGetTodoQuery, useGetTodosQuery} from "./store/apis";

const TodoApp = () => {

    // @ts-ignore
    // const {data:todos, isLoading} = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);

    const {data:todo, isLoading} = useGetTodoQuery(todoId)

    console.log(todo);

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }
    const prevTodo = () => {

        if(todoId === 1) return;
        setTodoId(todoId - 1)
    }

    return (
        <>
            <h1>TODOS - RTK Query</h1>
            <hr/>
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>


            <button onClick={prevTodo}>
                PREVIOUS TODO
            </button>

            <button onClick={nextTodo}>
                NEXT TODO
            </button>

            {/*<ul>*/}
            {/*    {todos.map((todo:any) => (*/}
            {/*        <li key={todo.id}*/}
            {/*        >*/}
            {/*           <strong>{todo.completed ? 'Done': 'Pending'} </strong>*/}
            {/*            {"  "}{todo.title}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}


        </>
    );
};

export default TodoApp;
