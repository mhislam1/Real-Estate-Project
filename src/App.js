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
import Dashboard from './component/Dashboard/Dashboard'
import PrivateRoute from './Privateroute'
import ForgotPassword from './component/ForgotPassword/ForgotPassword'
import UpdateProfile from './component/UpdateProfile/UpdateProfile';

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <PrivateRoute path='/home' component={Dashboard} />
            <PrivateRoute path='/update' component={UpdateProfile} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </AuthProvider>      
      </Router>

    </>
  );
}

export default App;