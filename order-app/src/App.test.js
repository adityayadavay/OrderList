import React from "react";
import { render, screen } from '@testing-library/react';
import { shallow,mount } from "enzyme";
import App from './App';
import OrderContainer from "./orders/OrderContainer";
import OrdersList from "./orders/components/OrdersList";
import ModalComponent from "./orders/components/ModalComponent";
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store';
import saga from 'redux-saga';

const mockStore = configureMockStore([saga]);

const store = mockStore({
  orderList: [
    {
      customerAddress: "N-303, Heliconia-1, Magarpatta City",
      customerName: "Poonam",
      grossOrderAmount: 12,
      itemCode: 12,
      itemDescription: "12",
      orderId: 3,
      quantity: 12,
      rate: 12,
      shipDate: "2021-05-21",
      shippingTax: 21,
      taxOnItem: 12,
      totalOrderAmount: 12,
      totalTax: 12,
    }
  ]
});

describe("Rendering Components", () => {
  it("renders App without crashing", () => {
    shallow(<App />) // No child rendering
  });

  it("renders OrderContainer without crashing", () => {
    shallow(<OrderContainer />)
  });

  it("renders OrderContainer component with Add order button", () => {
    const wrapper = shallow(<OrderContainer />)
    const button = wrapper.find(".addOrder-button");

    expect(button.length).toEqual(1);
  });

  it("OrderContainer component opens a popup when a button is clicked", async() => {
    const wrapper = shallow(<OrderContainer />);
    wrapper.find('.addOrder-button').simulate('click');   
    expect(wrapper.find(ModalComponent).prop('showModal')).toBe(true);
  });

  it("renders OrdersList component with table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <OrdersList />
      </Provider>
    );
    const table = wrapper.find('.table');
    expect(table).toHaveLength(1);
  });

  it("When double clicked on table, it opens a modal", () => {
    const wrapper = mount(
      <Provider store={store}>
        <OrdersList />
      </Provider>
    );
    const table = wrapper.find('.table');
    const row = table.find('tr.cursor-pointer')
    row.simulate('dblclick');

    expect(wrapper.find(ModalComponent).prop('showModal')).toBe(true);
  });
})
