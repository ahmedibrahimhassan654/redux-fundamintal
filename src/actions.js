import * as actions from './actionTypes'
//first way of actions creator arrow function
export const bugAdded = description => ({
   type: actions.BUG_ADDED,
   payload: {
      description
   }
})
//exersise solution 

export const bugResolved = (id) => ({
   type: actions.BUG_RESOLVED,
   payload: {
      id
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