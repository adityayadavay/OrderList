

import { takeEvery, call, put } from "redux-saga/effects";
import * as C from "../../constants/orderConstant";


export function* addOrder(action) {
  try {

    const response = yield call(fetch, "http://localhost:5000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload)
    });
    //   yield put({ type: UNSET_LOADER });
    const responseData = yield response.json();
    const data = responseData.data;

    if (responseData.status === 200) {
      yield put({
        type: C.ADD_ORDER_SUCCESS,
        payload: data.data,
      });
      yield put({type: C.FETCH_ORDER_REQUEST});
    } else {
      yield put({
        type: C.ADD_ORDER_FAIL,
        payload: { status: data.status, message: "Something went wrong." },
      });
    }
  } catch (error) {
    //   yield put({ type: UNSET_LOADER });
    yield put({
      type: C.ADD_ORDER_FAIL,
      payload: { status: error.status, message: error.message },
    });
  }
}


export function* fetchOrder() {

  try {

    const response = yield call(fetch, "http://localhost:5000/api/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    //   yield put({ type: UNSET_LOADER });
    const responseData = yield response.json();  

    if (responseData.status === 200) {

      yield put({
        type: C.FETCH_ORDER_SUCCESS,
        payload: responseData.result.data,
      });
    } else {
      yield put({
        type: C.FETCH_ORDER_FAIL,
        payload: { status: responseData.status, message: "Something went wrong." },
      });
    }
  } catch (error) {
    //   yield put({ type: UNSET_LOADER });
    yield put({
      type: C.FETCH_ORDER_FAIL,
      payload: { status: error.status, message: error.message },
    });
  }
}

export function* updateOrder(action) {

  try {

    const response = yield call(fetch, "http://localhost:5000/api/order", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload)
    });
    //   yield put({ type: UNSET_LOADER });
    const responseData = yield response.json();
    const data = responseData.data;

    if (responseData.status === 200) {
      yield put({
        type: C.ADD_ORDER_SUCCESS,
        payload: data.data,
      });
      yield put({type: C.FETCH_ORDER_REQUEST});
    } else {
      yield put({
        type: C.ADD_ORDER_FAIL,
        payload: { status: data.status, message: "Something went wrong." },
      });
    }
  } catch (error) {
    //   yield put({ type: UNSET_LOADER });
    yield put({
      type: C.ADD_ORDER_FAIL,
      payload: { status: error.status, message: error.message },
    });
  }
}

export function* deleteOrder(action) {

  try {

    const response = yield call(fetch, "http://localhost:5000/api/order", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload)
    });
    //   yield put({ type: UNSET_LOADER });
    const responseData = yield response.json();
    const data = responseData.data;

    if (responseData.status === 200) {
      yield put({
        type: C.ADD_ORDER_SUCCESS,
        payload: data.data,
      });
      yield put({type: C.FETCH_ORDER_REQUEST});
    } else {
      yield put({
        type: C.ADD_ORDER_FAIL,
        payload: { status: data.status, message: "Something went wrong." },
      });
    }
  } catch (error) {
    //   yield put({ type: UNSET_LOADER });
    yield put({
      type: C.ADD_ORDER_FAIL,
      payload: { status: error.status, message: error.message },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(C.ADD_ORDER_REQUEST, addOrder);
  yield takeEvery(C.FETCH_ORDER_REQUEST, fetchOrder);
  yield takeEvery(C.UPDATE_ORDER_REQUEST, updateOrder);
  yield takeEvery(C.DELETE_ORDER_REQUEST, deleteOrder);
}
