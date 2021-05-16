import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import * as C from "../../constants/orderConstant";
import ModalComponent from "./ModalComponent";
import OrderForm from "./OrderForm";
import "../cssFiles/OrdersList.css";

function OrderLists() {
    const orderList = useSelector(state => state.orderList);
    const dispatch = useDispatch();

    const [list, setList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(0);


    useEffect(() => {

        dispatch({
            type: C.FETCH_ORDER_REQUEST,
        });

    }, []);

    useEffect(() => {

        setList(orderList)

    }, [orderList]);


    useEffect(() => {

        let newFilteredList = orderList;

        if (searchValue.length) {
            if (isNaN(parseInt(searchValue))) {

                newFilteredList = newFilteredList.filter((data) => {
                    const sLowerCase = searchValue.toLowerCase();
                    const nameLowerCase = data.customerName.toLowerCase();
                    const addressLowerCase = data.customerName.toLowerCase();
                    return nameLowerCase.includes(sLowerCase) || addressLowerCase.includes(sLowerCase);
                });

            } else {
                newFilteredList = newFilteredList.filter((data) => {
                    const intSearchValue = parseInt(searchValue);

                    return data.orderId === intSearchValue;
                });
            }
        }

        setList(newFilteredList);

    }, [searchValue]);

    const changeSelectOrder = (orderId) => {
        const filterData = list.filter(data => data.orderId === orderId);
        setSelectedOrder(filterData);
        setIsShowModal(true);
    }

    const renderElement = list.map(data => (
        <tr className="cursor-pointer"
            key={data.orderId}
            onDoubleClick={() => changeSelectOrder(data.orderId)}
        >
            <td>{data.orderId}</td>
            <td>{data.customerName}</td>
            <td>{data.customerAddress}</td>
            <td>{data.shipDate}</td>
            <td>{data.shippingTax}</td>
            <td>{data.itemCode}</td>
            <td>{data.itemDescription}</td>
            <td>{data.totalOrderAmount}</td>
        </tr>
    ));

    const changeHandler = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSearchValue(value);

    }

    return (
        <div>
            {isShowModal ? (
                <ModalComponent
                    showModal={true}
                    onCloseHandler={() => setIsShowModal(!isShowModal)}
                    modalBody={
                        <OrderForm
                            selectedOrderData={selectedOrder[0]}
                            isUpdate={true}
                            closeModal={setIsShowModal}
                        />
                    }
                    smModal={true}
                    title={"Modify Order"}
                />
            ) : null}
            <div className="text-right pb-3">
                <input type="text" name="search" className="search-icon" placeholder="Search..." value={searchValue} onChange={changeHandler} />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                        <th>Ship Date</th>
                        <th>Shipping Tax</th>
                        <th>Item Code</th>
                        <th>Item Description</th>
                        <th>Total Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {renderElement}
                </tbody>
            </table>
        </div>
    )
}

export default OrderLists;