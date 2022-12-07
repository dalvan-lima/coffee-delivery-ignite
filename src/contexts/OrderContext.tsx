import { createContext, ReactNode, useReducer } from "react"
import { ICoffee } from "../components/CoffeeList"
import { addressFormData } from "../pages/Checkout"
import { addToOrder, decreaseQuantityInOrder, finalizeOrder, increaseQuantityInOrder, removeFromOrder } from "../reducers/order/actions"
import { orderReducer } from "../reducers/order/reducers"

export interface CoffeeInOrder {
  name: string
  price: number
  quantity: number
  img: string
}

interface OrderContextType {
  order: CoffeeInOrder[]
  total: number
  address: addressFormData
  increaseAmountOfCoffeeInCart: (name: string) => void
  decreaseAmountOfCoffeeInCart: (name: string) => void
  addCoffeeToCart: (data: CoffeeInOrder) => void
  orderFinalize: (address: addressFormData) => void
  removeCoffeeFromCart: (name: string) => void
}

export const OrderContext = createContext({} as unknown as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(orderReducer, {
    order: [],
    total: 0,
    address: {} as addressFormData
  })

  const { order, total, address } = coffeesState


  function addCoffeeToCart(data: CoffeeInOrder) {
    dispatch(addToOrder(data))
  }

  function removeCoffeeFromCart(name: string) {
    dispatch(removeFromOrder(name))
  }

  function increaseAmountOfCoffeeInCart(name: string) {
    dispatch(increaseQuantityInOrder(name))
  }
  
  function decreaseAmountOfCoffeeInCart(name: string) {
    dispatch(decreaseQuantityInOrder(name))
  }

  function orderFinalize(address: addressFormData) {
    dispatch(finalizeOrder(address))
  }

  return (
    <OrderContext.Provider value={{
      order,
      total,
      address,
      increaseAmountOfCoffeeInCart,
      decreaseAmountOfCoffeeInCart,
      addCoffeeToCart,
      orderFinalize,
      removeCoffeeFromCart
    }}>
      {children}
    </OrderContext.Provider>
  )
}