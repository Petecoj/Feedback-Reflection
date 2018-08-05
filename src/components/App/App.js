import React, { Component } from 'react';
import './App.css';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StyledRateFeelingPage from '../RateFeelingPage/RateFeelingPage';
import RateSupportPage from '../RateSupportPage/RateSupportPage';
import LeaveCommentsPage from '../LeaveCommentsPage/LeaveCommentsPage';
import FinalFeedBackPage from '../FinalFeedbackPage/FinalFeedbackPage';
import RateUnderstandingPage from '../RateUnderstandingPage/RateUnderstandingPage';
import AdminPage from '../AdminPage/AdminPage';
import NotFoundRoute from '../NotFoundRoute/NotFoundRoute';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
               <Switch>
                  <Redirect exact path from="/" to="/feelings"/>
                  <Route exact path="/final" component={FinalFeedBackPage} />
                  <Route exact path="/comments" component={LeaveCommentsPage} />
                  <Route exact path="/feelings" component={StyledRateFeelingPage} />
                  <Route exact path="/support" component={RateSupportPage} />
                  <Route exact path="/admin" component={AdminPage} /> 
                  <Route exact path="/understanding" component={RateUnderstandingPage} /> 
                  <Route component={NotFoundRoute} />
        </Switch>
          </Router>
       
       
      </div>
    );
  }
}

export default App;
