'use client'

import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ButtonComponent from '../components/Button';
import { deleteCustomer, getAllCustomers, updateCustomer } from '../service/customer.service';

interface Customer {
    id: string;
    name: string;
    address: string;
    salary: number;
}



const CustomersPage = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState(0.0);

    const [customers, setCustomers] = useState<Customer[]>([]);

     const geta = async () => {
        await getAllCustomers().then((response) => {
            setCustomers(response);
        });
    }

    useEffect(() => {
        getAll();
    }, [customers]);

    const getAll = async () => {
        getAllCustomers().then((response) => {
            setCustomers(response);
        });
    }


    return (
        <div>
            <NavBar />

            <section className='container mt-10 flex justify-end'>
                <ButtonComponent />
            </section>

            <section className='container m-auto mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-cyan-50 text-left'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {customers.map((customer, index) => {
                                return (
                                    <tr key={index} className='hover:bg-slate-500 text-white'>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.salary}</td>
                                        <td>
                                            <button className='' onClick={() => {
                                                setId(customer.id);
                                                setName(customer.name);
                                                setAddress(customer.address);
                                                setSalary(customer.salary);
                                                const modal = document.getElementById('updateModal');
                                                if (modal) {
                                                    (modal as HTMLDialogElement).showModal();
                                                }
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                </svg>

                                            </button>
                                            <button className='ml-4 hover:text-red-500' onClick={() => {
                                                setId(customer.id);
                                                const modal = document.getElementById('delete');
                                                if (modal) {
                                                    (modal as HTMLDialogElement).showModal();
                                                }
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </section >
            <dialog id="updateModal" className="modal">
                <div className="modal-box ">
                    <input type="text" value={id} onChange={
                        (event) => {
                            setId(event.target.value);
                        }
                    } placeholder="Customer ID" className="input input-bordered w-full" />
                    <input type="text" value={name} onChange={
                        (event) => {
                            setName(event.target.value);
                        }
                    } placeholder="Customer Name" className="input input-bordered w-full mt-5" />
                    <input type="text" value={address} onChange={
                        (event) => {
                            setAddress(event.target.value);
                        }
                    } placeholder="Customer Address" className="input input-bordered w-full mt-5" />
                    <input type="text" value={salary} onChange={
                        (event) => {
                            setSalary(parseFloat(event.target.value));
                        }
                    } placeholder="Customer Salary" className="input input-bordered w-full mt-5" />

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                            <button className="btn ml-4 btn-primary" onClick={() => {
                                const customer = {
                                    id: id,
                                    name: name,
                                    address: address,
                                    salary: salary
                                };
                                updateCustomer(customer).then((response) => {
                                    console.log(response);
                                }).catch((error) => {
                                    console.error(error);
                                });
                                getAll();
                            }}>Update Customer</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="delete" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you Sure to delete " {id} "</h3>
                    <p className="py-4">Press Delete key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                            <button className="btn btn-error ml-6" onClick={() => {
                                deleteCustomer(id).then((response) => {
                                    console.log(response);
                                }).catch((error) => {
                                    console.error(error);
                                });
                                getAll();
                            }}>Delete</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default CustomersPage;