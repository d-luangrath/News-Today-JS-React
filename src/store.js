import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsReducer";
import mediumReducer from "./reducers/mediumReducers";


export default configureStore({
    reducer: {
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
    }
})