'use client';


import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import AddItemButton from '../components/AddItemButton';
import ItemEditButton from '../components/ItemEditButton';
import DeleteButton from '../components/DeleteButton';
import { getAllItems } from '../service/item.service';

interface Item {
    id: string;
    description: string;
    price: number;
    quantity: number;
}

const ItemPage = () => {

    const [items, setItems] = React.useState<Item[]>([]); // Provide type for items state variable

    const [id, setId] = React.useState('');

    useEffect(() => {
        getAllItems().then((response) => {
            setItems(response);
        });
    }, [items]);


    return (
        <div>
            <NavBar />
            <section className='container mt-10 flex justify-end'>
                <AddItemButton />
            </section>

            <section className='container m-auto mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className='text-cyan-50 text-left'>
                                <th>#</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                                <th>QTY</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {items.map((item, index) => (
                                <tr onClick={()=>{
                                    setId(item.id);
                                }} key={item.id} className='text-cyan-50 text-left hover:bg-slate-400'>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td className='flex align-baseline justify-center'>
                                        <ItemEditButton id={id} />
                                        <DeleteButton id={id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ItemPage;