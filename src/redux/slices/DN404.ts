import sum from 'lodash/sum';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
// utils
import { randomInArray } from 'src/_mock';
import axios from '../../utils/axios';
import { IDN404MetaDataState, ICheckoutCartItem } from '../../@types/DN404';
// import DN404Inprogress from "../../DN404.list.json"
import DN404Medias from '../../DN404.media.json';
import DN404MediasPost from '../../DN404.media.post.json';
import DN404Lists from '../../DN404.list.json';
// ----------------------------------------------------------------------

const initialState: IDN404MetaDataState = {
  isLoading: false,
  error: null,
  products: [],
  product: null,
  checkout: {
    activeStep: 0,
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
    totalItems: 0,
  },
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },

    // CHECKOUT
    getCart(state, action) {
      const cart: ICheckoutCartItem[] = action.payload;

      const totalItems = sum(cart.map((product) => product.quantity));
      const subtotal = sum(cart.map((product) => product.price * product.quantity));
      state.checkout.cart = cart;
      state.checkout.discount = state.checkout.discount || 0;
      state.checkout.shipping = state.checkout.shipping || 0;
      state.checkout.billing = state.checkout.billing || null;
      state.checkout.subtotal = subtotal;
      state.checkout.total = subtotal - state.checkout.discount;
      state.checkout.totalItems = totalItems;
    },

    addToCart(state, action) {
      const newProduct = action.payload;
      const isEmptyCart = !state.checkout.cart.length;

      if (isEmptyCart) {
        state.checkout.cart = [...state.checkout.cart, newProduct];
      } else {
        state.checkout.cart = state.checkout.cart.map((product) => {
          const isExisted = product.id === newProduct.id;

          if (isExisted) {
            return {
              ...product,
              colors: uniq([...product.colors, ...newProduct.colors]),
              quantity: product.quantity + 1,
            };
          }

          return product;
        });
      }
      state.checkout.cart = uniqBy([...state.checkout.cart, newProduct], 'id');
      state.checkout.totalItems = sum(state.checkout.cart.map((product) => product.quantity));
    },

    deleteCart(state, action) {
      const updateCart = state.checkout.cart.filter((product) => product.id !== action.payload);

      state.checkout.cart = updateCart;
    },

    resetCart(state) {
      state.checkout.cart = [];
      state.checkout.billing = null;
      state.checkout.activeStep = 0;
      state.checkout.total = 0;
      state.checkout.subtotal = 0;
      state.checkout.discount = 0;
      state.checkout.shipping = 0;
      state.checkout.totalItems = 0;
    },

    backStep(state) {
      state.checkout.activeStep -= 1;
    },

    nextStep(state) {
      state.checkout.activeStep += 1;
    },

    gotoStep(state, action) {
      const step = action.payload;
      state.checkout.activeStep = step;
    },

    increaseQuantity(state, action) {
      const productId = action.payload;

      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      state.checkout.cart = updateCart;
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      state.checkout.cart = updateCart;
    },

    createBilling(state, action) {
      state.checkout.billing = action.payload;
    },

    applyDiscount(state, action) {
      const discount = action.payload;
      state.checkout.discount = discount;
      state.checkout.total = state.checkout.subtotal - discount;
    },

    applyShipping(state, action) {
      const shipping = action.payload;
      state.checkout.shipping = shipping;
      state.checkout.total = state.checkout.subtotal - state.checkout.discount + shipping;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getCart,
  addToCart,
  resetCart,
  gotoStep,
  backStep,
  nextStep,
  deleteCart,
  createBilling,
  applyShipping,
  applyDiscount,
  increaseQuantity,
  decreaseQuantity,
} = slice.actions;

// ----------------------------------------------------------------------

export function getProducts() {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/product/list');
      const _products = response.data.products;
      // eslint-disable-next-line array-callback-return
      _products.map((p: any, _: number) => {
        _products[_].images = [
          randomInArray(DN404MediasPost),
          randomInArray(DN404MediasPost),
          randomInArray(DN404MediasPost),
          randomInArray(DN404MediasPost),
          randomInArray(DN404MediasPost),
          randomInArray(DN404MediasPost),
        ];
        _products[_].coverUrl = randomInArray(DN404Medias);
      });
      console.log(_products);
      dispatch(slice.actions.getProductsSuccess(_products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getProduct(name: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/product/details', {
        params: { productId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1' },
      });

      const _product = response.data.product || randomInArray(DN404Lists.products);
      _product.images = [
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
      ];
      _product.coverUrl = randomInArray(DN404Medias);
      dispatch(slice.actions.getProductSuccess(_product));
    } catch (error) {
      console.error(error);
      const _product = randomInArray(DN404Lists.products);
      _product.images = [
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
        randomInArray(DN404Medias),
      ];
      _product.coverUrl = randomInArray(DN404Medias);
      dispatch(slice.actions.getProductSuccess(_product));
      // dispatch(slice.actions.hasError(error));
    }
  };
}
