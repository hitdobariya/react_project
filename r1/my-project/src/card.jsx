const Card = (props) => {
  return (
    <>
    <div className="w-64 h-[300px] font-mono text-center shadow-xl shadow-slate-400">
        <div className="m-4">
            <img className="w-64 rounded-md h-36" src={props.image} alt="image not found" />
        </div>
        <div className="m-4 font-bold">
            <h1>{props.heding}</h1>
        </div>
        <div className="m-4 font-normal">
            <p className="text-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>
        </div>
        <div className="m-4">
            <button className="w-40 text-sm font-medium border-2 border-blue-500 rounded-sm">Go Everywhere</button>
        </div>
    </div>
      
    </>
  )
}
export default Card