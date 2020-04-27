import { connect } from 'react-redux';
import { addTodo } from '../../lib/store/todo';
import ListTodo from './ListTodo';



const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => {
        console.log(`Todo ID: ${id}`);
        dispatch(toggleTodo(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);