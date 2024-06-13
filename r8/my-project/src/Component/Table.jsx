import React, { useState } from 'react';

export function Table() {
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        title: '',
        department: '',
        email: '',
        role: '',
        image: '',
    });
    const [people, setPeople] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleAddEmployee = () => {
        setPeople((prevPeople) => [...prevPeople, newEmployee]);
        setNewEmployee({
            name: '',
            title: '',
            department: '',
            email: '',
            role: '',
            image: '',
        });
    };

    const handleRemoveEmployee = (index) => {
        setPeople((prevPeople) => prevPeople.filter((item, i) => i !== index));
    };

    const filteredPeople = people.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Employees</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all employees. You can add new employees, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <input
                            type="text"
                            className='mx-4 border border-black rounded-md'
                            placeholder="Search by name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            onClick={handleAddEmployee}
                        >
                            Add new employee
                        </button>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                                <span>Employee</span>
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-700">
                                                Title
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                                Status
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                                Role
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {filteredPeople.map((item, index) => (
                                            <tr key={index}>
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
                                                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                            <div className="text-sm text-gray-700">{item.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">{item.title}</div>
                                                    <div className="text-sm text-gray-700">{item.department}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    {item.role}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                    <button className="text-gray-700" onClick={() => handleRemoveEmployee(index)}>
                                                        Remove
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
        </>
    )
}