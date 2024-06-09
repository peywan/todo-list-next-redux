'use client';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const Home = () => {
    return (
        <div className="container">
            <h1>Todo List with Redux Toolkit</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Home;
