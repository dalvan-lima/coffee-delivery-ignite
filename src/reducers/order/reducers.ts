import produce from "immer"
import { Reducer } from "react"
import { CoffeeInOrder } from "../../contexts/OrderContext"
import { addressFormData } from "../../pages/Checkout"
import { ActionTypes } from "./actions"

export interface OrderState {
  order: CoffeeInOrder[]
  total: number
  address: addressFormData
}


export const orderReducer: Reducer<OrderState, any> = (state: OrderState , action: any) => {
  switch(action.type) {
    case ActionTypes.ADD_TO_ORDER:
      return produce(state, draft => {
        if(draft.order.length < 1) {
          draft.total = 3.5
        }
        const coffeeAlreadyExists = draft.order.find((item) => item.name === action.payload.coffee.name)
        if(coffeeAlreadyExists) {
          draft.total = 3.5;
          const newCoffeesArray = draft.order.map((item) => {
            if(item.name === action.payload.coffee.name) {
              draft.total = draft.total + action.payload.coffee.price 
              return action.payload.coffee
            }
            draft.total = draft.total + item.price 
            return item
          })
  
          draft.order = newCoffeesArray
        } else {
          draft.total = draft.total + action.payload.coffee.price
          draft.order.push(action.payload.coffee)
        }        
      })
    case ActionTypes.REMOVE_FROM_ORDER:
      return produce(state, draft => {
        draft.order.length === 1 ? draft.total = 0 : draft.total = draft.total - 9.9
        const indexOfElementToRemove = draft.order.findIndex(item => item.name === action.payload.nameCoffee)
        draft.order.splice(indexOfElementToRemove, 1)
      })
    case ActionTypes.INCREASE_AMOUNT_OF_COFFEE_IN_CART:
      return produce(state, draft => {
        draft.order = draft.order.map(item => {
          if(item.name === action.payload.nameCoffee) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
      })
    case ActionTypes.DECREASE_AMOUNT_OF_COFFEE_IN_CART:
      return produce(state, draft => {
        draft.order = draft.order.map(item => {
          if(item.name === action.payload.nameCoffee) {
            if(item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
          }
          return item
        })
      })
    
    case ActionTypes.FINALIZE_ORDER:
      return produce(state, draft => {
        draft.order = []
        draft.total = 0
        draft.address = action.payload.address
      })
    default: 
      throw new Error(`Unhandled  action type ${action.type}`)
  }
}