import { ALLSHOW, COLORSHOW, COMPLETEDSHOW, INCOMPLETEDSHOW } from "../ActionTypes/ActionTypes"
import InitialState from "../../Todo/Reducers/initialState";


const FilterReducers = (state = InitialState, action) => {
    switch (action.type) {
        case ALLSHOW:
            return state;
        case COMPLETEDSHOW: {
            const completedToDos = state.filter(data => data.completed);
            return completedToDos;
        }
        case INCOMPLETEDSHOW: {
            return state.filter(data => !data.completed)
        }
        case COLORSHOW:
            return state.filter(data => data.color === action.payload)
        default: {
            return state;
        }
    }
}

export default FilterReducers;