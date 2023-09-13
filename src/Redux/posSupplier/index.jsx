import { call, put, takeLatest } from "redux-saga/effects";
import { callApi, callApi2 } from "../../Api/Apis";
import { ACTIVE_PRODUCT_GET, ACTIVE_PRODUCT_GET_FAILURE, ACTIVE_PRODUCT_GET_SUCCESS, CART, CART_FAILURE, CART_SUCCESS, PRODUCT_GET_ACTIVE, PRODUCT_GET_ACTIVE_FAILURE, PRODUCT_GET_ACTIVE_SUCCESS } from "../actionTypes";
function* activeProductGet(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='activeproducts';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : ACTIVE_PRODUCT_GET_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:ACTIVE_PRODUCT_GET_FAILURE,payload:Data.data.error})
    }
}


function* cart(data) {
    const formData = new FormData();
    const dataa=JSON.stringify(data.payload)
    console.log("data.payload",data.payload)
    formData.append('admin_id', data.payload.admin_id);
formData.append('supplier_id', data.payload.supplier_id);
// const productsJson = JSON.stringify(data.payload.products);
const productsJSON = JSON.stringify(data.payload.products);
  formData.append('products', productsJSON);
// data.payload.products.forEach((product, index) => {
//     formData.append(`products[${index}][id]`, product.id);
//     formData.append(`products[${index}][label]`, product.label);
//     formData.append(`products[${index}][price]`, product.price);
//     formData.append(`products[${index}][quantity]`, product.quantity);
//   });
// formData.append('products', JSON.stringify(data.payload.products));
formData.append('total_amount', data.payload.total_amount);
    // for (let key in data.payload) {
    //   formData.append(key, data.payload[key]);
    // }
    let url='purchaseItem';
    const Data = yield call(callApi2, url,'POST',dataa);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : CART_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CART_FAILURE,payload:Data.data.error})
    }
}

export function* cartSupplierSaga() {
    yield takeLatest(CART,cart)
}
export function* activeProductGetSaga() {
    yield takeLatest(ACTIVE_PRODUCT_GET,activeProductGet)
}