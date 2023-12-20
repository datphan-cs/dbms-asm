import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"

import Login from './router/login/login.js';
import Manager from './router/manager/manager.js'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/manager' render = {() => {return localStorage.getItem('accessToken') ? <Manager/> : <Redirect to='/'/>} } />
      </Switch>
    </Router>
  );
}

export default App;
