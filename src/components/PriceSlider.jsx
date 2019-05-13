import React from 'react';
import TextField from 'material-ui/TextField';


const styles = {
  priceContainer: {
    display: 'inline-block',
    width: '50%',
    textAlign: 'center',
  },
  textInput: {
    textAlign: 'center',
  },
};

class PriceSlider extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div style={styles.priceContainer}>
          <h3>$$$ Min Budget</h3>
          <TextField
            name="minPrice"
            inputStyle={styles.textInput}
            hintStyle={styles.textInput}
            defaultValue={600}
            onChange={this.props.onMinPriceChange}
          />
        </div>
        <div style={styles.priceContainer}>
          <h3>Max Budget $$$</h3>
            <TextField
              name="maxPrice"
              inputStyle={styles.textInput}
              hintStyle={styles.textInput}
              defaultValue={1700}
              onChange={this.props.onMaxPriceChange}
            />
        </div>
      </div>
    );
  }
}

export default PriceSlider;
