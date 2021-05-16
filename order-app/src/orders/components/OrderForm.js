import React, { useState, useEffect } from "react";
import * as C from "../../constants/orderConstant";
import { useDispatch } from "react-redux";
import "../cssFiles/OrderForm.css"

function OrderForm(props) {
  const dispatch = useDispatch();
  const [form, setAllValues] = useState({
    customerName: "",
    customerAddress: "",
    shipDate: "",
    itemCode: 0,
    itemDescription: "",
    rate: "",
    quantity: "",
    taxOnItem: 0,
    grossOrderAmount: 0,
    totalTax: 0,
    shippingTax: 0,
    totalOrderAmount: 0
  });

  useEffect(() => {
    setAllValues({ ...form, ...props.selectedOrderData })

  }, [props.selectedOrderData]);

  const changeHandler = e => {
    setAllValues({ ...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = e => {
    e.preventDefault();
    props.closeModal();
    dispatch({
      type: C.ADD_ORDER_REQUEST,
      payload: { ...form }
    })
  }

  const handleUpdate = e => {
    e.preventDefault();
    props.closeModal();
    dispatch({
      type: C.UPDATE_ORDER_REQUEST,
      payload: { ...form }
    })
  }

  const handleDelete = e => {
    e.preventDefault();
    props.closeModal();
    dispatch({
      type: C.DELETE_ORDER_REQUEST,
      payload: { orderId: form.orderId }
    })
  }

  return (
    <div className="text- center">
      <form>
        <div className="">
          <label htmlFor="customerName">Customer Name: 
          <input type="text" id="customerName" name="customerName" value={form.customerName} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="customerAddress">Customer Address: 
          <input type="text" id="customerAddress" name="customerAddress" value={form.customerAddress} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="shipDate">Ship Date:<input type="date" id="shipDate" name="shipDate" value={form.shipDate} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="itemCode">Item Code: 
          <input type="text" id="itemCode" name="itemCode" value={form.itemCode} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="itemDescription">Item Description: 
          <input type="text" id="itemDescription" name="itemDescription" value={form.itemDescription} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="rate">Rate: 
          <input type="text" id="rate" name="rate" value={form.rate} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="quantity">Quantity: 
          <input type="text" id="quantity" name="quantity" value={form.quantity} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="taxOnItem">Tax on the Item: 
          <input type="text" id="taxOnItem" name="taxOnItem" value={form.taxOnItem} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="grossOrderAmount">Gross Order Amount: 
          <input type="text" id="grossOrderAmount" name="grossOrderAmount" value={form.grossOrderAmount} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="totalTax">Total Tax: 
          <input type="text" id="totalTax" name="totalTax" value={form.totalTax} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="shippingTax">Shipping Tax: 
          <input type="text" id="shippingTax" name="shippingTax" value={form.shippingTax} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="totalOrderAmount">Total Order Amount: 
          <input type="text" id="totalOrderAmount" name="totalOrderAmount" value={form.totalOrderAmount} onChange={changeHandler} />
          </label>
        </div>
        <div>
          {
            props.isUpdate ?
              <React.Fragment>
                <input type="submit" value="Update" className="pl-5 pr-5" onClick={handleUpdate} />
                <input type="submit" value="Delete" className="ml-5 pl-5 pr-5" onClick={handleDelete} />
                </React.Fragment>
              :
              <input type="submit" value="Add" className="pl-5 pr-5" onClick={handleSubmit} />
          }
        </div>
      </form>
    </div>
  );
}

export default OrderForm;