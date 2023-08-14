import { ADDED, ALLCLEAR, ALLCOMPLETED, DELETED, SELECTCOLOR, SELECTTEXT } from "../ActionTypes/ActionTypes"

export const toDoAdd = (ToDoText) => {
    return {
        type: ADDED,
        payload: ToDoText,
    }
}
export const toDoDelete = (id) => {
    return {
        type: DELETED,
        payload: id,
    }
}
export const allCompleted = () => {
    return {
        type: ALLCOMPLETED
    }
}
export const allAlear = () => {
    return {
        type: ALLCLEAR
    }
}
export const selectText = (id) => {
    return {
        type: SELECTTEXT,
        payload: id,
    }
}
export const selectColor = (id, color) => {
    return {
        type: SELECTCOLOR,
        payload: {
            id, color
        }
    }
}