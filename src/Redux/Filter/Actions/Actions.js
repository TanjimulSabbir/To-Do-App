import { ALLSHOW, COLORSHOW, COMPLETEDSHOW, INCOMPLETEDSHOW } from "../ActionTypes/ActionTypes"

export const allTodoShow = (ToDoText) => {
    return {
        type: ALLSHOW,
        payload: ToDoText,
    }
}
export const completedTodoShow = () => {
    return {
        type: COMPLETEDSHOW,
    }
}
export const incompletedTodoShow = () => {
    return {
        type: INCOMPLETEDSHOW,
    }
}
export const colorTodoShow = (color) => {
    return {
        type: COLORSHOW,
        payload:color,
    }
}

