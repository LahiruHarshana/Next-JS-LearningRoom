'use client'

import { useState } from "react";
import { addCustomer, getAllCustomers } from "../service/customer.service";


export default function Button() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState(121212.21);

  return (
    <div>
      <button className='btn btn-secondary btn-sm' onClick={() => {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
          (modal as HTMLDialogElement).showModal();
        }
      }}>Add New Customer</button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box ">
          <input type="text" onChange={
            (event) => {
              setId(event.target.value);
            }
          } placeholder="Customer ID" className="input input-bordered w-full" />
          <input type="text" onChange={
            (event) => {
              setName(event.target.value);
            }
          } placeholder="Customer Name" className="input input-bordered w-full mt-5" />
          <input type="text" onChange={
            (event) => {
              setAddress(event.target.value);
            }
          } placeholder="Customer Address" className="input input-bordered w-full mt-5" />
          <input type="text" onChange={
            (event) => {
              setSalary(parseFloat(event.target.value));
            }
          } placeholder="Customer Salary" className="input input-bordered w-full mt-5" />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              <button className="btn ml-4 btn-primary" onClick={()=>{

                const customer = {
                  id: id,
                  name: name,
                  address: address,
                  salary: salary
                };

                addCustomer(customer).then((response) => {
                  console.log(response);
                }).catch((error) => {
                  console.error(error);
                });

                // geta();

                // getAllCustomers().then((response) => {
                //   console.log(response);
                // });
              }}>Add Customer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}