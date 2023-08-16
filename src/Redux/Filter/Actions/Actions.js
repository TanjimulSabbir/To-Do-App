import { COLORSHOW, STATUSCHANGED, } from "../ActionTypes/ActionTypes"

export const statusChanged = (value) => {
    return {
        type: STATUSCHANGED,
        payload: value
    }
}
export const colorTodoShow = (color) => {
    return {
        type: COLORSHOW,
        payload: color,
    }
}

