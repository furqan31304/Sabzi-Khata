import {
  ACTIVE_PRODUCT_GET,
  ACTIVE_PRODUCT_GET_FAILURE,
  ACTIVE_PRODUCT_GET_SUCCESS,
  ADD_TO_CART,
  CART,
  CART_FAILURE,
  CART_SUCCESS,
  CUSTOMER_SET,
  PRODUCT_SET,
  PRODUCT_TOGGLE,
  PRODUCT_TOGGLE_FAILURE,
  PRODUCT_TOGGLE_SUCCESS,
  PRODUCT_UPDATE,
  PRODUCT_UPDATE_FAILURE,
  PRODUCT_UPDATE_SUCCESS,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../actionTypes";

const initial_state = {
  products: [
    // {
    //   id: "",
    //   label: "",
    //   quantity: "",
    //   price: "",
    // },
  ],
  total_amount:"",
  cart:{
    data:[],
    error:null,
    loading:false,


  },
  customer_set: {
    data: "",
  },
  product_set: {
    data: "",
  },
  active_product_get: {
    loading: false,
    status: "",
    data: "",
    error: "",
  },
};
const posReducer = (state = initial_state, { type, payload }) => {
  console.log("reducer data :", payload);
  switch (type) {
    case CUSTOMER_SET:
      return {
        ...state,
        customer_set: {
          data: payload,
        },
      };
      case CART:
      return {
        ...state,
        cart: {
          data: payload,
          loading:true
        },
      };
      case CART_SUCCESS:
      return {
        ...state,
        cart: {
          data: payload,
          error:payload.error

        },
      };
      case CART_FAILURE:
      return {
        ...state,
        cart: {
          data: payload,
          error:payload.error
        },
      };
      
    case ADD_TO_CART:
      const { id, label,} = payload;
      return {
        ...state,
        products: [
          ...state.products,
          {
            product_id: id,
            label: label,
            
          },
        ],
      };
    case REMOVE_FROM_CART:
      const filterData = state.products.filter((element) => element.id !== payload);
      return {
        ...state,
        products: filterData,
      };
    // case UPDATE_CART:
    // // const { product_id, price, updatedQuantity } = payload;
    // const updatedData = state.data.map((item) => {
    //  if (item.id === payload.product_id) {
    //     console.log("product_id....",payload.product_id)
    //      return {
    //      ...item,
    //          price: payload.price,
    //         quantity: payload.quantity
    //             };
    //                 }
    //      return item;
    //         });
    //     return {
    //     ...state,
    //     data: updatedData
    //     };

    // case UPDATE_CART:
    //   const updatedItems = state.data.map((item) => {
    //     if (item.id === payload.id) {
    //       return { ...item, quantity:payload.quantity,price:payload.price };
    //     }
    //     return item;
    //   });
    //   return { ...state, data: updatedItems };




    case UPDATE_CART:
  const { product_id, price, quantity } = payload;
  const updatedData = state.products.map((item) => {
    if (item.id === product_id) {
        let total
      return {
        ...item,
        price,
        quantity
      };
    }
    return item;
  });
  const totalPrice = updatedData.reduce((sum, item) => sum + (parseInt(item.price) || 0), 0);
  return {
    ...state,
    products: updatedData,
    total_amount: totalPrice
  };
    case PRODUCT_SET:
      return {
        ...state,
        product_set: {
          data: payload,
        },
      };
    case ACTIVE_PRODUCT_GET:
      return {
        ...state,
        active_product_get: {
          loading: true,
        },
      };
    case ACTIVE_PRODUCT_GET_SUCCESS:
      return {
        ...state,
        active_product_get: {
          data: payload.data,
          error: payload.error,
          status: payload.status,
          loading: false,
        },
      };
    case ACTIVE_PRODUCT_GET_FAILURE:
      return {
        ...state,
        active_product_get: {
          error: payload.error,
          status: payload.status,
          loading: false,
        },
      };
    default:
      return { ...state };
  }
};
export default posReducer;
