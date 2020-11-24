import configureStore from './store/configureStore'

import * as actions  from './store/bugs'
const store= configureStore()

store.dispatch(actions.bugAdded('bug1'))
store.dispatch(actions.bugAdded('bug2'))
store.dispatch(actions.bugAdded('bug3'))
store.dispatch(actions.bugResolved(1))
// unsubscribe()
// store.dispatch({
//    type: actions.BUG_REMOVED,
//    payload: {
//       id:1
//    }
// }) 

console.log(store.getState());

