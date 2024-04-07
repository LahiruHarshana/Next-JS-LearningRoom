'use client';

import React, { useEffect } from 'react';
import { getItem, updateItem } from '../service/item.service';

const ItemEditButton = (prop: any) => {

    const [id, setId] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [unitPrice, setUnitPrice] = React.useState(0.0);
    const [qty, setQty] = React.useState(0);

    async function fetchItem() {
        console.log('prop.id', prop.id);
        try {
            const response = await getItem(prop.id);
            setId(response.id);
            setDescription(response.description);
            setUnitPrice(response.price);
            setQty(response.quantity);
        } catch (error) {
            console.error(error);
            alert('Error fetching item');
        }
    }

   
        // fetchItem();


    return (
        <div>
            <button  onClick={() => {
                fetchItem();
                const modal = document.getElementById('editItem');
                if (modal) {
                    (modal as HTMLDialogElement).showModal();
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
            </button>

            <dialog id="editItem" className="modal">
                <div className="modal-box ">
                    <h2 className="text-2xl font-bold mb-5">Edit Item</h2>
                    <input type="text" value={prop.id} placeholder="Item ID" className="input input-bordered w-full" />
                    <input type="text" onChange={
                        (e) => setDescription(e.target.value)
                    } value={description} placeholder="Item Description" className="input input-bordered w-full mt-5" />
                    <input type="text" onChange={
                        (e) => setUnitPrice(parseFloat(e.target.value))
                    
                    } value={unitPrice} placeholder="Item Unit Price" className="input input-bordered w-full mt-5" />
                    <input type="text" onChange={
                        (e) => setQty(parseInt(e.target.value))
                    
                    } value={qty} placeholder="Item QTY" className="input input-bordered w-full mt-5" />

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                            <button className="btn ml-4 btn-primary" onClick={()=>{
                                const item = {
                                    id: prop.id,
                                    description: description,
                                    price: unitPrice,
                                    quantity: qty
                                };
                                updateItem(item).then((response) => {
                                    alert('Item updated successfully');
                                }).catch((error) => {
                                    alert('Error updating item');
                                });
                            }}>Add Customer</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ItemEditButton;