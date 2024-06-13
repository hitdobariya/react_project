import { useState } from 'react'

const R4 = () => {
    const [Count, setCount] = useState("Select Recipe")
    function recipe() {
        return (
            <>
                <li> Add half glass of water</li>
                <li> Add 2spoon tea, 1spoon sugar , milk </li>
                <li> Boil it</li>
                <li> Stir the Tea</li>
                <li> Enjoy your hot bevrage</li>
            </>
        )
    }
    const r1 = () => {
        setCount(recipe)
    }
    function recipe1() {
        return (
            <>
                <li> Add cup of milk</li>
                <li> Add 2spoon coffee, 1spoon sugar</li>
                <li> Boil it</li>
                <li> Enjoy your hot bevrage</li>
            </>
        )
    }
    const r2 = () => {
        setCount(recipe1)
    }
    const r3 = () => {
        setCount("Select Recipe")
    }
    return (
        <>
            <h1 className="text-left font-bold">{Count}</h1>
            <button className="border-2 m-4 w-16 rounded-md   h-10 border-black" onClick={r1}>Tea</button>
            <button className="border-2 m-4 w-16 rounded-md   h-10 border-black" onClick={r2}>Coffee</button>
            <button className="border-2 m-4 w-16 rounded-md   h-10 border-black" onClick={r3}>Reset</button>
        </>
    )
}
export default R4