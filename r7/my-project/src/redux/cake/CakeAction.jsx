import { Buy_Cake } from "./CakeConstant";
import { Add_Cake } from "./CakeConstant";
import { Buy_Chocolate } from "./CakeConstant";
import { Add_Chocolate } from "./CakeConstant";


export function buy_cake() {
    return{
        type:Buy_Cake
    }
}

export function buy_chocolate() {
    return{
        type:Buy_Chocolate
    }
}

export function add_cake() {
    return{
        type:Add_Cake
    }
}

export function add_chocolate() {
    return{
        type:Add_Chocolate
    }
}