import { connect } from 'react-redux';
import AddCard from './AddCard'
import { addTaskActionCreator } from '../../redux/actions';
import axios from 'axios';

const mapStateToProps = (state) => {
    return {
        tasks: state.allTasks.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (title, description) => dispatch(addTaskActionCreator(title, description)),
        getUsers: () => {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                response.data.items.map(item => addTaskActionCreator(item.name, 'AXIOS WORKS'))
            })
        },
    }
}

const AddCardContainer = connect(mapStateToProps, mapDispatchToProps)(AddCard)

export default AddCardContainer