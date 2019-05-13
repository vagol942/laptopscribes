import React from 'react';
import sortBy from 'sort-by';
import uid from 'uid';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import LaptopMore from './LaptopMore.jsx';
import LaptopRow from './LaptopRow.jsx';

const styles = {
  header: {
    cursor: 'pointer',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    UserSelect: 'none',
  },
  headerSelected: {
    cursor: 'pointer',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    UserSelect: 'none',
    color: 'black',
  },
};

class LaptopTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null,
      sorting: null,
    };
    this.sort = this.sort.bind(this);
    this.togglePop = this.togglePop.bind(this);
  }

  sort(name) {
    const that = this;
    return (
      () => {
        if (this.state.sorting === name) {
          that.setState({ sorting: `-${name}` });
        } else {
          that.setState({ sorting: name });
        }
      }
    );
  }

  togglePop(id) {
    const that = this;
    return (
      () => {
        if (that.state.open === id) {
          that.setState({ open: null });
        } else {
          that.setState({ open: id });
        }
      }
    );
  }

  setStyle(column) {
    if (this.state.sorting === column || this.state.sorting === `-${column}`) {
      return styles.headerSelected;
    }
    return styles.header;
  }

  displayCaret(column, direction) {
    if (this.state.sorting === column && direction === 'down') {
      return null;
    }
    if (this.state.sorting === `-${column}` && direction === 'up') {
      return null;
    }
    return { display: 'none' };
  }

  render() {
    const minPrice = this.props.minPrice;
    const maxPrice = this.props.maxPrice;
    let laptops = this.props.laptops;
    if (this.state.sorting != null) {
      laptops = laptops.sort(sortBy(this.state.sorting));
    }
    let rows = laptops.map(laptop => {
      if (laptop.price >= minPrice && laptop.price <= maxPrice) {
        return (
          <LaptopRow
            key={laptop._id}
            name={laptop.name}
            price={laptop.price}
            processor={laptop.processor}
            gpu={laptop.gpu}
            ram={laptop.ram}
            hdd={laptop.hdd}
            ssd={laptop.ssd}
            display={laptop.display_properties ? `${laptop.display} ${laptop.display_properties}` : laptop.display}
            rating={laptop.rating}
            togglePop={this.togglePop(laptop._id)}
          />
        );
      }
      return null;
    });

    let allNullRows = true;
    for(var i = 0; i < rows.length; i++){
        if (rows[i] !== null){
          allNullRows = false;
        }
    }
    if (allNullRows){
      rows = (
        <tr>
          <td colSpan={8}>
            <div style={{
              textAlign: 'center',
              margin: '10px',
            }}>
              <p>No Laptops found, please change the prices</p>
            </div>
          </td>
        </tr>
      )
    }

    if (this.state.open != null) {
      let i;
      for (i = 0; i < laptops.length; i++) {
        if (this.state.open === laptops[i]._id) {
          if (laptops[i].price >= minPrice && laptops[i].price <= maxPrice) {
            rows.splice(i + 1, 0, (
              <LaptopMore
                key={uid()}
                picture={laptops[i].picture}
                name={laptops[i].name}
                comments={laptops[i].comments}
                amazonLink={laptops[i].amazon_link}
                reviewName={laptops[i].review_name}
                reviewLink={laptops[i].review_link} 
                name={laptops[i].name}
                price={laptops[i].price}
                processor={laptops[i].processor}
                gpu={laptops[i].gpu}
                ram={laptops[i].ram}
                hdd={laptops[i].hdd}
                ssd={laptops[i].ssd}
                display={laptops[i].display_properties ? `${laptops[i].display} ${laptops[i].display_properties}` : laptops[i].display}
                rating={laptops[i].rating}
              />
            ));
          }
        }
      }
    }

    return (
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>
              <p style={this.setStyle('name')} onClick={this.sort('name')}>
                Name <i
                  style={this.displayCaret('name', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('name', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('price')} onClick={this.sort('price')}>
                Price* <i
                  style={this.displayCaret('price', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('price', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('processor')} onClick={this.sort('processor')}>
                Processor <i
                  style={this.displayCaret('processor', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('processor', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('gpu')} onClick={this.sort('gpu')}>
                GPU <i
                  style={this.displayCaret('gpu', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('gpu', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('ram')} onClick={this.sort('ram')}>
                RAM <i
                  style={this.displayCaret('ram', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('ram', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('hdd')} onClick={this.sort('hdd', 'ssd')}>
                Storage <i
                  style={this.displayCaret('hdd', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('hdd', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('display')} onClick={this.sort('display')}>
                Display <i
                  style={this.displayCaret('display', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('display', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
            <TableHeaderColumn>
              <p style={this.setStyle('rating')} onClick={this.sort('rating')}>
                Rating <i
                  style={this.displayCaret('rating', 'down')}
                  className="fa fa-caret-down" aria-hidden="true"
                />
                <i
                  style={this.displayCaret('rating', 'up')}
                  className="fa fa-caret-up" aria-hidden="true"
                />
              </p>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover>
          { rows }
        </TableBody>
      </Table>
    );
  }
}

LaptopTable.propTypes = {
  laptops: React.PropTypes.array,
};

export default LaptopTable;
