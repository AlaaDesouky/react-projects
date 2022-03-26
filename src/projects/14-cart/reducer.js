const reducer = (state, action) => {
  // CLEAR ITEM
  if (action.type === "CLEAR_CART") {
    return ({ ...state, cart: [] })
  }

  // REMOVE
  if (action.type === "REMOVE") {
    return ({ ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) })
  }

  // INCREASE
  // if (action.type === 'INCREASE') {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload) {
  //       return { ...cartItem, amount: cartItem.amount + 1 }
  //     }
  //     return cartItem
  //   })

  //   return ({ ...state, cart: tempCart })
  // }

  // DECREASE
  // if (action.type === 'DECREASE') {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload) {
  //       return { ...cartItem, amount: cartItem.amount - 1 }
  //     }
  //     return cartItem
  //   }).filter((cartItem) => cartItem.amount !== 0)

  //   return ({ ...state, cart: tempCart })
  // }

  // CONTROL AMOUNT
  if (action.type === 'CONTROL_AMOUNT') {
    const { id, type } = action.payload;
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (type === 'inc') {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }

        if (type === 'dec') {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
      }
      return cartItem
    }).filter((cartItem) => cartItem.amount !== 0)


    return ({ ...state, cart: tempCart })
  }

  // TOTALS
  if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem
      const itemTotal = price * amount

      cartTotal.total += itemTotal
      cartTotal.amount += amount
      return cartTotal

    }, { total: 0, amount: 0 })

    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }

  // LOADING 
  if (action.type === 'LOADING') {
    return { ...state, isLoading: true }
  }

  // DISPLAY ITEMS
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, isLoading: false }
  }



  // DEFAULT RETURN
  return state
}

export default reducer