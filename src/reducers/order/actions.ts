import { CoffeeInOrder } from "../../contexts/OrderContext";
import { addressFormData } from "../../pages/Checkout";

export enum ActionTypes {
  ADD_TO_ORDER = 'ADD_TO_ORDER',
  REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER',
  INCREASE_AMOUNT_OF_COFFEE_IN_CART = 'INCREASE_AMOUNT_OF_COFFEE_IN_CART',
  DECREASE_AMOUNT_OF_COFFEE_IN_CART = 'DECREASE_AMOUNT_OF_COFFEE_IN_CART',
  FINALIZE_ORDER = 'FINALIZE_ORDER'
}

export function addToOrder(coffee: CoffeeInOrder) {
  return {
    type: ActionTypes.ADD_TO_ORDER,
    payload: {
      coffee,
    },
  }
}

export function removeFromOrder(nameCoffee: string) {
  return {
    type: ActionTypes.REMOVE_FROM_ORDER,
    payload: {
      nameCoffee,
    },
  }
}

export function increaseQuantityInOrder(nameCoffee: string) {
  return {
    type: ActionTypes.INCREASE_AMOUNT_OF_COFFEE_IN_CART,
    payload: {
      nameCoffee,
    },
  }
}

export function decreaseQuantityInOrder(nameCoffee: string) {
  return {
    type: ActionTypes.DECREASE_AMOUNT_OF_COFFEE_IN_CART,
    payload: {
      nameCoffee,
    },
  }
}

export function finalizeOrder(address: addressFormData) {
  return {
    type: ActionTypes.FINALIZE_ORDER,
    payload: {
      address,
    },
  }
}