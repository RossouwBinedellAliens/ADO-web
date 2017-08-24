import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Redirect, 
  Switch
} from 'react-router-dom';
import Home from "./pages/home";
//import GraduateInfo from './pages/graduateInfo';
import GraduateForm from './pages/graduateForm';
import VacationInfo from './pages/vacationInfo';
import VacationForm from './pages/vacationForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/graduate/form" component={GraduateForm}/>
            <Route path="/vacation" component={VacationInfo}/>
            <Route path="/vacation/form" component={VacationForm}/>
            <Redirect from="/" to="/home"/> {/* Will need 404 page */}              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
