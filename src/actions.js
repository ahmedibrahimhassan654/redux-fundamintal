import * as actions from './actionTypes'
//first way of actions creator arrow function
export const bugAdded = description => ({
   type: actions.BUG_ADDED,
   payload: {
      description:'bug1'
   }
})

//another way of actions creator function 
// export function bugAdded(description) {
//    return {
//    type: actions.BUG_ADDED,
//    payload: {
//       description:'bug1'
//    }
//}
// }