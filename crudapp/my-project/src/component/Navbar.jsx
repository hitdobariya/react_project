import { Link  , NavLink} from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [data, setData] = useState([])

    return (
        <div className='bg-gray-800 text-white p-4 font-mono'>
            <div className="flex justify-around items-center">
                <div>
                    <Link to="/">
                        <span className='text-2xl'>Crudapp</span>
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex space-x-16">
                            <li>
                                <NavLink className='text-sm' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='text-sm' to="/aboutus">AboutUs</NavLink>
                            </li>
                            <li>
                                <NavLink className='text-sm' to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink className='text-sm' to="/contactus">ContactUs</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>  
            </div>
        </div>
    )
}
export default Navbar