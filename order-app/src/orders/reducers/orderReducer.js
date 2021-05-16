import * as C from "../../constants/orderConstant";

const initialState = {
isActionCompleted: false,
isOrderAdded: false,
orderList:[]
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_ORDER_SUCCESS:
      return {
        ...state,
        isActionCompleted: true,
        isOrderAdded:true,
      }
      case C.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        orderList: action.payload
      }
      default:
        return state;
      }
    
  }

export default orderReducer;
