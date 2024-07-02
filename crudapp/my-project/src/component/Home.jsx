import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FaUserEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5

    const loadUser = async () => {
        const res = await axios.get('http://localhost:3000/users')
        setData(res.data)
        setFilteredData(res.data)
        console.log(res.data.users)
    }

    useEffect(() => {
        loadUser()
    }, [])

    const removeItem = async (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                loadUser()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const toggleDropdown = () => {
    //     setDropdownVisible(!dropdownVisible)
    // }

    //   const ascendingData = () => {
    //     const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name))
    //     setFilteredData(sortedData)
    //   }

    //   const descendingData = () => {
    //     const sortedData = [...filteredData].sort((a, b) => b.name.localeCompare(a.name))
    //     setFilteredData(sortedData)
    //   }

    //   const previousData = () => {
    //     loadUser()
    //   }

    // const handleSearch = (searchTerm) => {
    //     const results = data.filter((user) =>
    //         user.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //     setFilteredData(results)
    //     setCurrentPage(1) // Reset to the first page when a new search is performed
    // }

    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = filteredData.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(filteredData.length / recordsPerPage)
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

    const filterdata = records.filter((item) => item.username.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    console.log(filterdata, "filterdata")

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const changeCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>

            {/* <div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-blue-800"
              type="button"
            >
              Sort data
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div className="absolute right-5">
              {dropdownVisible && (
                <div id="dropdown" className="z-[10000] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li onClick={ascendingData}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ascending</a>
                    </li>
                    <li onClick={descendingData}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</a>
                    </li>
                    <li onClick={previousData}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Previous</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div> */}

            <Navbar />
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Users</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all Users. You can add new Users, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <input
                            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-black text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Users"
                        ></input>
                    </div>
                    <div>
                        <NavLink to="/add">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add new User
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>User</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Proffesion
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Age
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Mobile No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Edit
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {filterdata.map((item) => (
                                            <tr key={item.id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={item.image}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{item.username}</div>
                                                            <div className="text-sm text-gray-700 font-semibold">{item.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 font-semibold ">{item.proffesion}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-red-200 px-2 text-xs font-semibold leading-5 ">
                                                        {item.age}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-red-200 px-2 text-xs font-semibold leading-5">
                                                        {item.number}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                    <NavLink to={`/edit/${item.id}`} className="text-gray-700">
                                                        <FaUserEdit className='text-2xl' />
                                                    </NavLink>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                    <button className="text-gray-700" onClick={() => removeItem(item.id)}>
                                                        <MdDelete className='text-2xl' />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="Page navigation example" className="mt-4 flex justify-end">
                <ul className="inline-flex items-center space-x-2">
                    <li>
                        <button className="px-3 py-1 text-sm text-gray-500 hover:text-black" onClick={prevPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map((pageNumber) => (
                        <li key={pageNumber}>
                            <button
                                className={`px-3 py-1 text-sm ${pageNumber === currentPage ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                                onClick={() => changeCurrentPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button className="px-3 py-1 text-sm text-gray-500 hover:text-black" onClick={nextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Home