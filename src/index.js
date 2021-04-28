import * as React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import Firebase from './data/Firebase'

ReactDOM.render(
  <React.StrictMode>
    <Firebase />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()