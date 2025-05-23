import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "../asyncActions/tasksSlice"

const store = configureStore({
        reducer: {
            tasks: taskReducer,
        },
    },
);

export default store;