import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import {browserHistory} from 'react-router';

const styles = {
  tabsWrapper: {
    position: 'fixed',
    top: '0',
    width: '100%',
    z:'300000',
  },
  inkBarStyle: {
    backgroundColor: 'white',
  },
  tab: {
    backgroundColor: '#212121',
  },
  navbarText: {
    color: 'white',
  },
};

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'laptops'
    }
  }

  handleChange(value){
    console.log("Aja");
    this.setState({
      route: value
    });
    browserHistory.push(value);
  }

  componentWillMount(){
    this.forceURIcheck();
  }

  componentWillUpdate(){
    this.forceURIcheck();
  }

  forceURIcheck(){
    if (window.location.pathname !== this.state.route){
      this.setState({
        route: window.location.pathname
      })
    }
  }

  render(){
    if(window.innerWidth > 924) {
      return (
          <Tabs inkBarStyle={styles.inkBarStyle}
            value={this.state.route}
            onChange={this.handleChange.bind(this)}>
            <Tab style={styles.tab} label="Laptop List" value="/laptops" >
            </Tab>
            <Tab style={styles.tab} label="Laptops vs Desktops" value="/laptops-vs-desktops">
            </Tab>
            <Tab style={styles.tab} label="Headset Recomendations" value="/headsets">
            </Tab>
            <Tab style={styles.tab} label="Backpack Recomendations" value="/backpacks">
            </Tab>
            <Tab style={styles.tab} label="Mice Recomendations" value="/mice">
            </Tab>
          </Tabs>
      );
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default NavBar;
