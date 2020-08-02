import React from 'react';
import TopNavBar from './components/NavBar'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <TopNavBar />
            <Router />
        </BrowserRouter>
      </Provider>
    );

}

export default App;
