import { COLORSHOW, STATUSCHANGED } from "../ActionTypes/ActionTypes"
import { initialFilterState } from "./InitialState";



const FilterReducers = (state = initialFilterState, action) => {
    switch (action.type) {
        case STATUSCHANGED: {
            return { ...state, status: action.payload }
        }
        case COLORSHOW: {
            const matchedColor = state.colors?.map(data => {
                if (data === action.payload) {
                    return data;
                } else {
                    return { ...data, colors: action.payload }
                }
            })
            return { ...state, colors: [...state.colors, action.payload] };
        }
        default: {
            return state;
        }
    }
}

export default FilterReducers;