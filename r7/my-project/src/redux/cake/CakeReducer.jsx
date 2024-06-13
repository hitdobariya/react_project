import { Buy_Cake } from "./CakeConstant";
import { Add_Cake } from "./CakeConstant";
import { Buy_Chocolate } from "./CakeConstant";
import { Add_Chocolate } from "./CakeConstant";


const initialState ={
    numofCake:10,
    numofChocolate:10
}

const Reducer = ( state = initialState , action ) =>{
    switch (action.type) {
        case Buy_Cake:{
            if(state.numofCake <= 0){
                return{
                   ...state,
                    numofCake : state.numofCake = 0
                }
            }else{
                return{
                   ...state,
                    numofCake : state.numofCake - 1
                }
            }
        }
        case Add_Cake:{
            return{
                ...state,
                numofCake : state.numofCake + 1
            }
        }
        case Buy_Chocolate:{
            if(state.numofChocolate <= 0){
                return{
                   ...state,
                    numofChocolate : state.numofChocolate = 0
                }
            }else{
                return{
                   ...state,
                    numofChocolate : state.numofChocolate - 1
                }
            }
        }
        case Add_Chocolate:{
            return{
                ...state,
                numofChocolate : state.numofChocolate + 1
            }
        }
        default:
            return state
    }
}

export default Reducer