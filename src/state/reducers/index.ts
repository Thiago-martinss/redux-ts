import { combineReducers } from "redux";
import reposistoriesReducers from './repositoriesReducer'

const reducers = combineReducers({
    repositories: reposistoriesReducers
});

export default reducers;

export type RootState = ReturnType<typeof reducers>; 