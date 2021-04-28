import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../lib/store/todo';
// import ListTodo from './ListTodo';

const Todo = ({ text, onClick, completed }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onClick: PropTypes.func,
}

const ListTodo = ({ todos = [], toggleTodo }) => (
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
)

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

const getVisibilityFilter = (todos = [], filter) => {
    switch (filter) {
        case SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case SHOW_ALL:
        default:
            return todos;
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibilityFilter(state.todos, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => {
        console.log(`Todo ID: ${id}`);
        dispatch(toggleTodo(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);