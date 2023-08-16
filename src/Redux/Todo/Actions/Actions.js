import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, SELECTCOLOR, TOGGLED } from "../ActionTypes/ActionTypes"

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
        type: ALLCOMPLETED,
    }
}
export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}
export const selectToggled = (todoid) => {
    return {
        type: TOGGLED,
        payload: todoid,
    }
}
export const selectColor = (todoid, color) => {
    return {
        type: SELECTCOLOR,
        payload: {
            todoid, color
        }
    }
}