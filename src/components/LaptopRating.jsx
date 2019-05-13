import React from 'react';
import uid from 'uid';

class LaptopRating extends React.Component{
  render() {
    let stars = [];
    let i;
    for (i = 0; i < Math.floor(this.props.rating); i++) {
      stars.push(<i key={uid()} className="fa fa-star" aria-hidden="true" />);
    }
    if (Math.floor(this.props.rating) !== this.props.rating) {
      stars.push(<i key={uid()} className="fa fa-star-half-o" aria-hidden="true" />);
    }
    let j;
    for (j = 0; j < (5 - Math.ceil(this.props.rating)); j++) {
      stars.push(<i key={uid()} className="fa fa-star-o" aria-hidden="true" />)
    }
    return (
      <span>
        { stars }
      </span>
    );
  }
}

export default LaptopRating;
