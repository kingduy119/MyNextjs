import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, onClick, completed }) => {
    <li
        onClick={onclick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
}

Todo.propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onClick: PropTypes.func,
}

const ListTodo = ({ todos = [], toggleTodo }) => {
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
}

ListTodo.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            completed: PropTypes.bool,
            text: PropTypes.string,
        }).isRequired,
    ).isRequired,
    toggleTodo: PropTypes.func,
};

export default ListTodo;

// const getVisibleTodos = (todos = [], fil)
// const mapStateToProps = (state) => ({
//     todos: state.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//     toggleTodo: (id) => {
//         console.log(`Todo ID: ${id}`);
//         dispatch(toggleTodo(id));
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);

// export { Todo, ListTodo };
