import Reducer from "./cake/CakeReducer"
import { createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";

// const  store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger)))


const  store = createStore(Reducer, composeWithDevTools(applyMiddleware()))

export default store;