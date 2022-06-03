import React, { useState, useContext, useEffect } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import { Nav, Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
 
  useEffect( () => {
    check().then( data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  },[])

  if (loading) {
    return <Spinner animation={'grow'}/>
  }
 
  // return (
  //   <Routes>
  //     <Route element={<NavBar />} />
  //     <Route element={<AppRouter />} />  
  //   </Routes>
    
  // );
  return [
    <NavBar key={1} />,
    <AppRouter key={2} />
  ]
});

export default App;
