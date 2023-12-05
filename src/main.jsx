import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider }from 'react-router-dom'
import router from "./util/router.jsx";
import { Provider } from 'react-redux'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<Provider store={store}>*/}
        <App />
      {/*</Provider>*/}
  </React.StrictMode>
)
