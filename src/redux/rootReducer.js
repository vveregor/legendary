import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import {postsReducer} from "./postsReducer";
import {loginReducer} from "./loginReducer";

const rootReducer = combineReducers({
    user: loginReducer,
    posts: postsReducer,
    form: formReducer
});

export default rootReducer;