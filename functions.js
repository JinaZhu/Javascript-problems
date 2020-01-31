"use strict";


// 1. isHometown
function is_hometown(town){
    //Given a `town`, return `True` if `town` is 'San Francisco'.

    //Arguments:
    //    town (str): A town

    //Returns:
    //    bool: True if `town` is 'San Francisco'

    return (town === 'San Francisco');
  }
// 2. getFullName
function getFullName(firstName, lastName) {
// Define your function here
  return `${firstName} ${lastName}`
}
// 3. calculateTotal
function calculate_total(base_price, state, tax=0.05){

  const subtotal = base_price * (1 + tax)

  let fee = 0

  if (state === 'CA'){
    fee = 0.03 * subtotal
  }
  else if (state === 'PA'){
    fee = 2
  }
  else if (state === 'MA'){
    if (base_price <= 100){
      fee = 1}
    else {
      fee = 3
    }

    }
  
  return (subtotal + fee)
}
// Define your function here
