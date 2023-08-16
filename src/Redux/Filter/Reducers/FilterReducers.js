import { ALLSHOW, COLORSHOW, COMPLETEDSHOW, INCOMPLETEDSHOW } from "../ActionTypes/ActionTypes"
import InitialState from "../../Todo/Reducers/initialState";
import { useSelector } from "react-redux";


const FilterReducers = (state = InitialState, action) => {
    const AllState = useSelector(state => state.todolist)
    switch (action.type) {
        case ALLSHOW:
            return AllState;
        case COMPLETEDSHOW: {
            const completedToDos = AllState.filter(data => data.completed);
            return completedToDos;
        }
        case INCOMPLETEDSHOW: {
            return AllState.filter(data => !data.completed)
        }
        case COLORSHOW: {
            const selectedToDo = AllState.filter(todo => todo.color === action.payload)
            return selectedToDo;
        }
        default: {
            return AllState;
        }
    }
}

export default FilterReducers;