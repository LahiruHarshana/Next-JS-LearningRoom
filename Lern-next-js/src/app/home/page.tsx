import React from 'react';
import NavBar from '../components/NavBar';
import './../home/index.css';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <section className="text-center mt-10 flex-1 justify-self-center align-middle">
                <div className="container m-auto">
                    <div className="grid grid-rows-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="row-span-3 border home-card bg-cyan-700 rounded-md">
                            <h3 className="text-4xl font-bold mt-4 text-white">Total Of Customer</h3>
                            <h2 className='text-4xl font-bold mt-10'>10</h2>
                        </div>
                        <div className="row-span-3 border home-card bg-cyan-700	 rounded-md">
                            <h3 className="text-4xl font-bold mt-4 text-white">Total Of Items</h3>
                            <h2 className='text-4xl font-bold mt-10'>10</h2>
                        </div>
                        <div className="row-span-3 border home-card bg-cyan-700 rounded-md">
                            <h3 className="text-4xl font-bold mt-4 text-white">Total Of Orders</h3>
                            <h2 className='text-4xl font-bold mt-10'>10</h2>
                        </div>
                    </div>
                </div>
                <div className="container m-auto mt-10">
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="row-span-3 border home-card bg-cyan-700 rounded-md">
                            <h3 className="text-4xl font-bold mt-4 text-white">Total Of Customer</h3>
                            <h2 className='text-4xl font-bold mt-10'>10</h2>
                        </div>
                        <div className="row-span-3 border home-card bg-cyan-700	 rounded-md">
                            <h3 className="text-4xl font-bold mt-4 text-white">Total Of Items</h3>
                            <h2 className='text-4xl font-bold mt-10'>10</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;