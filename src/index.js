import store from './store'

import {bugAdded} from './actions.js'
// const unsubscribe =store.subscribe(() => {
//    console.log('store changed',store.getState());
// })

store.dispatch(bugAdded('bug1'))
// unsubscribe()
// store.dispatch({
//    type: actions.BUG_REMOVED,
//    payload: {
//       id:1
//    }
// }) 

console.log(store.getState());

