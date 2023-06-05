import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom"
import Todo from './Todo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  {/* <Todo /> */}
  </BrowserRouter>
   
  </React.StrictMode>,
)
