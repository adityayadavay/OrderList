import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrdersList from "./components/OrdersList";
import ModalComponent from "./components/ModalComponent";

function OrderContainer() {
  
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  return (
    <div className="text-center">
      <button className="addOrder-button" onClick={() => setIsShowAddForm(!isShowAddForm)}>
        Add order
      </button>

      <OrdersList />
      {isShowAddForm ? (
        <ModalComponent
          showModal={true}
          onCloseHandler={() => setIsShowAddForm(!isShowAddForm)}
          modalBody={<OrderForm closeModal={() => setIsShowAddForm(false)}/>
          }
          smModal={true}
          title={"Add Order"}
        />
      ) : null}
    </div>
  );
}

export default OrderContainer;