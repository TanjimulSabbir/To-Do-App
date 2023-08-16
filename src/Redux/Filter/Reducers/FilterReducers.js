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
        case CLEARCOMPLETED: {
            return state.filter(data => !data.completed)
        }
       
        default: {
            return state;
        }
    }
}

export default FilterReducers;