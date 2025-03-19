import tasks from "../data/tasks";

const initialState = tasks();

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {}
        case "REMOVE_TASK":
            return {}
        case "EDIT_TASK":
            return {}
        case "COMPLETE_TASK":
            return {}
        default:
            return state;
    }
}

export default taskReducer;