import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeToDo } from '../features/ToDoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeToDo(todo.id))}
              className="bg-red-600 hover:bg-purple-400 py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M14 3H6c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1zM17 5H3c-.6 0-1 .4-1 1s.4 1 1 1h1.1l1.9 11c.1.6.6 1 1.2 1h6c.6 0 1-.4 1.2-1l1.9-11H17c.6 0 1-.4 1-1s-.4-1-1-1zm-1 11H5l-1-8h12l-1 8z" />
              </svg>
            </button>

          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
