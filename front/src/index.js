import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import NewsStore from './store/NewsStore';
import UserStore from './store/UserStore';
//import {createRoot} from 'react-dom/client';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)


const rootElement = document.getElementById('root')
//const root = createRoot(rootElement)

ReactDOM.render(
  <Router>
  <Context.Provider value={{
    user: new UserStore(),
    news: new NewsStore(),
  }}>
    <App />
  </Context.Provider>
  </Router>
, rootElement);
 
