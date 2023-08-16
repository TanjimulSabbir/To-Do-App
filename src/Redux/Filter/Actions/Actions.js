import { ALLSHOW, COLORSHOW, COMPLETEDSHOW, INCOMPLETEDSHOW } from "../ActionTypes/ActionTypes"

export const allTodoShow = (ToDoText) => {
    return {
        type: ALLSHOW,
        payload: ToDoText,
    }
}
export const completedTodoShow = (id) => {
    return {
        type: COMPLETEDSHOW,
        payload: id,
    }
}
export const incompletedTodoShow = () => {
    return {
        type: INCOMPLETEDSHOW,
    }
}
export const colorTodoShow = () => {
    return {
        type: COLORSHOW,
    }
}

