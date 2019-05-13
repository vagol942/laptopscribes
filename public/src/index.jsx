import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, Redirect } from 'react-router'

import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import LaptopsViewContainer from './components/LaptopsViewContainer.jsx';

//Articles
import DesktopsVSLaptopsContainer from './components/Articles/DesktopsVSLaptopsContainer.jsx';
import HeadsetsContainer from './components/Articles/HeadsetsContainer.jsx';
import BackpacksContainer from './components/Articles/BackpacksContainer.jsx';
import MiceContainer from './components/Articles/MiceContainer.jsx';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Redirect from="/" to="/laptops" />
          <Route path="/" component={App}>
            <Route path="/laptops" component={LaptopsViewContainer}/>
            <Route path="/laptops-vs-desktops" component={DesktopsVSLaptopsContainer}/>
            <Route path="/headsets" component={HeadsetsContainer}/>
            <Route path="/backpacks" component={BackpacksContainer}/>
            <Route path="/mice" component={MiceContainer}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <NavBar />
        <Header />
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));
