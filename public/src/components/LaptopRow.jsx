import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import LaptopRating from './LaptopRating.jsx';

const styles = {
  container: {
    cursor: 'pointer',
  },
};

class LaptopRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ssd = this.props.ssd;
    let hdd = this.props.hdd;
    let storage;
    if (hdd === 0) {
      storage = (
        <span>{ssd}GB SSD</span>
      );
    } else if (ssd === 0) {
      storage = (
        <span>{hdd}GB HDD</span>
      );
    } else {
      storage = (
        <span>{ssd}GB SSD + {hdd}GB HDD</span>
      );
    }
    const row = (
      <TableRow
        hoverable
        onClick={this.props.togglePop}
        style={styles.container}
      >
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>${this.props.price}</TableRowColumn>
        <TableRowColumn>{this.props.processor}</TableRowColumn>
        <TableRowColumn>{this.props.gpu}</TableRowColumn>
        <TableRowColumn>{this.props.ram}GB</TableRowColumn>
        <TableRowColumn>{storage}</TableRowColumn>
        <TableRowColumn>{this.props.display}</TableRowColumn>
        <TableRowColumn><LaptopRating rating={this.props.rating} /></TableRowColumn>
      </TableRow>
    );
    return row;
  }
}

export default LaptopRow;
