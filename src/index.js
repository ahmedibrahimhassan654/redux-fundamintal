import store from './store'

store.dispatch({
   type: 'bugAdded',
   payload: {
      description:'bug1'
   }
})

store.dispatch({
   type: 'bugRemoved',
   payload: {
      id:1
   }
}) 

console.log(store.getState());

// console.log(store.getState());



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();