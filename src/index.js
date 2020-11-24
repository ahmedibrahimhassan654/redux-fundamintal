import store from './store'

import {bugAdded,bugResolved} from './actions.js'
// const unsubscribe =store.subscribe(() => {
//    console.log('store changed',store.getState());
// })

store.dispatch(bugAdded('bug1'))
store.dispatch(bugAdded('bug2'))
store.dispatch(bugAdded('bug3'))
store.dispatch(bugResolved(1))
// unsubscribe()
// store.dispatch({
//    type: actions.BUG_REMOVED,
//    payload: {
//       id:1
//    }
// }) 

console.log(store.getState());

