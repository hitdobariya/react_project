import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { FaUserEdit } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useNavigate , useParams } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [user , setUser] = useState({
    username:'',
    email:'',
    proffesion:'',
    age:'',
    number:'',
    image:null
  })

  const loadUserWithId = async() => {
    const res = await axios.get(`http://localhost:3000/users/${id}`)
    setUser(res.data)
  }

  const onSubmitEditUser = async(e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3000/users/${id}` , user)
    .then(() => {
      navigate('/')
    })
  }

  useEffect(() => {
    loadUserWithId()
  } , [])

  return (
    <div>
      <section className="rounded-md bg-black/80 p-2">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2">
              <FaUserEdit className='text-4xl' />
            </div>
            <h2 className="text-2xl font-bold leading-tight text-black">User Edit Form</h2>

            <form action="#" method="POST" className="mt-8" onSubmit={onSubmitEditUser}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    UserName
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="UserName"
                      id="name"
                      value={user.username}
                      onChange={(e) => setUser({...user , username:e.target.value})}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={user.email}
                      onChange={(e) => setUser({...user , email:e.target.value})}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Proffesion{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Proffesion"
                      id="Proffesion"
                      value={user.proffesion}
                      onChange={(e) => setUser({...user , proffesion:e.target.value})}
                    ></input>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-900">
                        {' '}
                        Age{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="number"
                        placeholder="Age"
                        id="Age"
                        value={user.age}
                        onChange={(e) => setUser({...user , age:e.target.value})}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-900">
                        {' '}
                        Mobile No{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="tel"
                        placeholder="Mobile No"
                        id="Mobile No"
                        value={user.number}
                        onChange={(e) => setUser({...user , number:e.target.value})}
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Image{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      id="file"
                    ></input>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <NavLink to="/">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 whitespace-nowrap"
                    >
                      <ArrowLeft className="me-2" size={16} /> Go Back
                    </button>
                  </NavLink>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Edit User<ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Edit