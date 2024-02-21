import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../config/apiConfig";
import axios from "axios";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    category,
    color,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const jwt = localStorage.getItem("jwt");
    const response = await axios.get(
      `http://localhost:8080/api/products?category=${category}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pagenumber=${pageNumber}&pageSize=${pageSize}&color=${color}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const { data } = response;
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    console.log("product data", data);
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const jwt = localStorage.getItem("jwt");
    // const { data } = api.get(`/api/products/id/${productId}`);
    const { data } = await axios.get(
      `http://localhost:8080/api/products/id/1`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    console.log("product data", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
