import { COLORSHOW, STATUSCHANGED } from "../ActionTypes/ActionTypes"
import { initialFilterState } from "./InitialState";



const FilterReducers = (state = initialFilterState, action) => {
    switch (action.type) {
        case STATUSCHANGED: {
            return { ...state, status: action.payload }
        }
        case COLORSHOW: {
            const colorIndex = state.colors.indexOf(action.payload);
        
            if (colorIndex === -1) {
                // If color is not in the array, add it
                return { ...state, colors: [...state.colors, action.payload] };
            } else {
                // If color is already in the array, remove it
                const updatedColors = state.colors.filter(color => color !== action.payload);
                return { ...state, colors: updatedColors };
            }
        }        
        default: {
            return state;
        }
    }
}

export default FilterReducers;