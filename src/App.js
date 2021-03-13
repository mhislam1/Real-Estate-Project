import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Register from './Pages/SignUpPage';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import {AuthProvider} from './component/Context/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/contact' component={Contact} />
		      <Route path='/about' component={About} />
        </Switch>
      </Router>
    </AuthProvider>      
    </>
  );
}

export default App;