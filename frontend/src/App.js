import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Confirmacion from './components/Confirmacion';
import Index from './components/Index'; 
import Login from './components/Login';
import PaginaPrincipal from './components/PaginaPrincipal';
import UserLog from './components/UserLog';






function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route path="/" component={PaginaPrincipal} exact />
    <Route path="/index" component={Index} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/confirmacion" component={Confirmacion} exact />
    <Route path="/userlog" component={UserLog} exact />
    </Switch>
    </BrowserRouter>     
    </div>
  );
}

export default App;
