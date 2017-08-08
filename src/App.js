import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Redirect, 
  Switch
} from 'react-router-dom';
import Home from "./pages/home";
import GraduateInfo from './pages/graduateInfo';
import GraduateForm from './pages/graduateForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/graduate" component={GraduateInfo}/>
            <Route path="/graduate/form" component={GraduateForm}/>
            <Redirect from="/" to="/home"/> {/* Will need 404 page */}              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
