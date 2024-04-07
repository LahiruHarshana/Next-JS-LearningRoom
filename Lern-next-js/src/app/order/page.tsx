import React from 'react';
import NavBar from '../components/NavBar';

const OrderPage = () => {
    return (
        <div>
            <NavBar />
            <section className='container m-auto'>
                <input type="text" placeholder="Next ID" className="input input-bordered w-96 mt-5 mr-8" />
                <input type="date" placeholder="Type here" className="input input-bordered w-96 mt-5" />
                <div className="grid grid-cols-3 gap-4 mt-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                    <div className="border rounded-lg">
                        <form className="p-4">
                            <label className="label">Select Customer</label>
                            <select aria-placeholder='select customer' className="select select-bordered w-full m-auto">
                                <option className='h-5' selected></option>
                                <option>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                        </form>
                    </div>
                    <div className="border rounded-lg">
                        <form className="p-4">
                            <label className="label">Select Item</label>
                            <select aria-placeholder='select customer' className="select select-bordered w-full m-auto">
                                <option className='h-5' selected></option>
                                <option>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="number" placeholder="QTY" className="input input-bordered w-full mt-5 h-10" />
                            <button className="btn btn-primary w-full mt-5" type='button'>Add Item</button>
                        </form>
                    </div>
                    <div className="border">
                        <form className="p-4">
                            <h1 className="text-2xl">Order Summary</h1>
                            <h2 className="text-xl">Total: $0.00</h2>
                            <input type="text" placeholder="Cash" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" placeholder="Balance" className="input input-bordered w-full mt-5 h-10" />
                            <button className="btn btn-primary w-full mt-5" type='button'>Place Order</button>
                        </form>
                    </div>
                </div>
                <table className="table mt-11">
                        {/* head */}
                        <thead>
                            <tr className='text-cyan-50 text-left'>
                                <th>#</th>
                                <th>Desctiption</th>
                                <th>Unit Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='hover:bg-lime-900 text-cyan-50'>
                                <th>CUS-001</th>
                                <td>SAVINDA</td>
                                <td>GALLE</td>
                                <td>12500.998</td>
                            </tr>
                        </tbody>
                    </table>
            </section>
        </div>
    );
};

export default OrderPage;