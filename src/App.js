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
import VacationInfo from './pages/vacationInfo';
import VacationForm from './pages/vacationForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/graduate" component={GraduateInfo}/>
            <Route exact path="/graduate/form" component={GraduateForm}/>
            <Route exact path="/vacation" component={VacationInfo}/>
            <Route exact path="/vacation/form" component={VacationForm}/>
            <Redirect from="*" to="/"/>              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
