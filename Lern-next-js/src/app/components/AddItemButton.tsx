'use client';

import React from 'react';
import { addItem } from '../service/item.service';

const AddItemButton = () => {
    
    const [id, setId] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [unitPrice, setUnitPrice] = React.useState(0.0);
    const [qty, setQty] = React.useState(0);

    return (
        <div>
            <button className='btn btn-secondary btn-sm' onClick={() => {
                const modal = document.getElementById('addItem');
                if (modal) {
                    (modal as HTMLDialogElement).showModal();
                }
            }}>Add New Item</button>

            <dialog id="addItem" className="modal">
                <div className="modal-box ">
                    <h2 className="text-2xl font-bold mb-5">Add New Item</h2>
                    <input type="text" value={id} onChange={
                        (e) => {
                            setId(e.target.value);
                        }
                    } placeholder="Item ID" className="input input-bordered w-full" />
                    <input type="text" value={description} onChange={
                        (e) => {
                            setDescription(e.target.value);
                        }
                    
                    } placeholder="Item Description" className="input input-bordered w-full mt-5" />
                    <input type="text" onChange={
                        (e) => {
                            setUnitPrice(parseFloat(e.target.value));
                        }
                    } placeholder="Item Unit Price" className="input input-bordered w-full mt-5" />
                    <input type="text"  onChange={
                        (e) => {
                            setQty(parseInt(e.target.value));
                        }
                    } placeholder="Item QTY" className="input input-bordered w-full mt-5" />

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                            <button className="btn ml-4 btn-primary" onClick={()=>{
                                const item = {
                                    id,
                                    description,
                                    price: unitPrice,
                                    quantity: qty
                                }
                                addItem(item).then((response)=>{
                                    console.log(response);
                                    alert('Item added successfully');
                                }).catch((error)=>{
                                    console.error(error);
                                });
                            }}>Add Customer</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddItemButton;