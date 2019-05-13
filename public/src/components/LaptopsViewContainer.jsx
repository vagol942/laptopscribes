import React from 'react';
import uid from 'uid';
import { Card, CardTitle } from 'material-ui/Card';

import PriceSlider from './PriceSlider.jsx';
import LaptopTable from './LaptopTable.jsx';
import LaptopsMobileTable from './LaptopsMobileTable';

const styles = {
  container: {
    maxWidth: '1440px',
    margin: 'auto',
    marginTop: '32px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '16px',
    color: '#212121',
    marginBottom: '16px',
    fontSize: '13px',
  },
  price: {
    width: '50%',
    float: 'left',
  },
  priceContainer: {
    display: 'inline-block',
    width: '50%',
    textAlign: 'center',
  },
  title: {
    fontFamily: "'Audiowide', cursive",
    marginBottom: '12px',
  },
};

class LaptopsViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: [],
      minPrice: 400,
      maxPrice: 4500,
    };
  }

  componentWillMount() {
    fetch('/data/laptops.json').then(res => res.json()).then(jason => jason.map(laptop => {
      laptop._id = uid();
      return laptop;
    }))
    .then(laptops => this.setState({laptops: laptops}));
  }

  onMinPriceChange(event) {
    this.setState({ minPrice: event.target.value });
  }

  onMaxPriceChange(event) {
    this.setState({ maxPrice: event.target.value });
  }
  render() {
    if (window.innerWidth > 924) {
      return (
        <div>
          <Card style={styles.container}>
            <CardTitle titleStyle={styles.title} title="Set your budget*" />
            <PriceSlider
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              onMinPriceChange={this.onMinPriceChange.bind(this)}
              onMaxPriceChange={this.onMaxPriceChange.bind(this)}
            />
          </Card>
  
          <Card style={styles.container}>
            <LaptopTable
              laptops={this.state.laptops}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
            />
          </Card>
  
          <div style={styles.footer}>
            <p style={{
              marginBottom: '5px',
            }}>*Prices are for reference use only and might not take into account shipping cost, discounts or other factors that could modify the final cost of the listed items.</p>
            <p>Made with <i className="fa fa-heart" aria-hidden="true" /> by /g/ </p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <LaptopsMobileTable
            laptops={this.state.laptops}
          />
          <div style={styles.footer}>
            <p style={{
              marginBottom: '5px',
            }}>*Prices are for reference use only and might not take into account shipping cost, discounts or other factors that could modify the final cost of the listed items.</p>
            <p>Made with <i className="fa fa-heart" aria-hidden="true" /> by /g/ </p>
          </div>
        </div>
      )
    }

  }
}

export default LaptopsViewContainer;
