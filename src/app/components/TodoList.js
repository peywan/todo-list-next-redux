'use client';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
