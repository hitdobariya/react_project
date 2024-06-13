import { buy_cake } from "../redux/Index";
import { add_cake } from "../redux/Index";
import { buy_chocolate } from "../redux/Index";
import { add_chocolate } from "../redux/Index";
import { connect } from "react-redux";

import React from 'react'

const Container = (props) => {
  return (
    <div className="w-screen h-screen  bg-slate-800 flex justify-center items-center rounded-md">
      <div className="w-[500px] h-[500px] bg-white text-center flex flex-col justify-center items-center">
        <div className="m-10 w-full h-full">
          <h2 className="font-semibold text-l">Num of cake : {props.numofCake}</h2>
          <div className="flex justify-around">
            <button className="w-36 h-7 border-emerald-300" onClick={props.buy_cake}>Buycake</button>
            <button className="w-36 h-7 border-emerald-300" onClick={props.add_cake}>Addcake</button>
          </div>
        </div>
        <div className="m-10 w-full h-full">
          <h2 className="font-semibold text-l">Num of Chocolate : {props.numofChocolate}</h2>
          <div className="flex justify-around">
            <button className="w-36 h-7 border-emerald-300" onClick={props.buy_chocolate}>BuyChocolate</button>
            <button className="w-36 h-7 border-emerald-300" onClick={props.add_chocolate}>AddChocolate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numofCake: state.numofCake,
    numofChocolate: state.numofChocolate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buy_cake: () => dispatch(buy_cake()),
    add_cake: () => dispatch(add_cake()),
    buy_chocolate: () => dispatch(buy_chocolate()),
    add_chocolate: () => dispatch(add_chocolate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)