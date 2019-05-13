import React from 'react';
import uid from 'uid';
import LaptopRating from './LaptopRating.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  row: {
    backgroundColor: '#212121',
  },
  container: {
    color: 'white',
    maxWidth:'1000px',
    margin:'auto',
    marginTop: '8px',
    marginBottom: '8px',
    minHeight: '180px',
  },
  title: {
    fontFamily: "'Audiowide', cursive",
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    margin: 'auto',
    marginLeft: '0',
  },
  picture: {
    width: '100%',
    height: 'auto',
  },
  pictureContainer:{
    display: 'inline-block',
    width: '30%',
    verticalAlign: 'text-top',
    margin: '10px',
  },
  detailsContainer: {
    display: 'inline-block',
    width: '35%',
    verticalAlign: 'text-top',
    margin: '10px',
  },
  buttonsContainer: {
    display: 'inline-block',
    width: '30%',
    verticalAlign: 'text-top',
    margin:'auto',
    textAlign: 'rigth',
  },
  buyButton: {
    margin: '5px',
  },
  sellButton: {
    margin: '5px',

  },
  footerContainer: {
    textAlign: 'center',
  },
  specSpan: {
    marginLeft: '10px',
    verticalAlign: 'text-top',
  },
  specLogo: {
    fill: 'white',
  },
  stars: {
    marginBottom: '12px',
  }
};

class LaptopMore extends React.Component{
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

    let buyIcon = <FontIcon className="fa fa-amazon" />
    let BuyLink = (
      <RaisedButton
        key={uid()} 
        primary
        style={styles.buyButton}
        label={"Buy on Amazon"}
        href={this.props.amazonLink}
        icon={buyIcon}
        target="_blank"
      >
      </RaisedButton>
    )

    let reviewIcon = <FontIcon className="fa fa-external-link" />

    const ReviewLink = (
      <RaisedButton
        key={uid()}
        style={styles.sellButton}
        icon={reviewIcon}
        label={this.props.reviewName}
        secondary
        href={this.props.reviewLink}
        target="_blank"
      >
      </RaisedButton>
    )

    return (
      <tr>
        <td colSpan={8} style={styles.row}>
          <div style={styles.container}>

            <div>
              <h1 style={styles.title}>{this.props.name}</h1>
              <h3 style={styles.stars}><LaptopRating rating={this.props.rating} /></h3>
            </div>

            <div style={styles.contentContainer}>

              <div style={styles.pictureContainer}>
                <a href={this.props.amazonLinks}><img style={styles.picture} src={this.props.picture}/></a>
              </div>

              <div style={styles.detailsContainer}>
                <h2>What do we think about it?</h2>
                <p>{this.props.comments}</p>
              </div>

              <div style={styles.buttonsContainer}>
                {BuyLink}
                {ReviewLink}
              </div>
            </div>

            <div style={styles.footerContainer}>
              <span style={styles.specSpan}><img style={styles.specLogo} src="svg/cpu.svg" /> Processor: {this.props.processor}</span>
              <span style={styles.specSpan}><img style={styles.specLogo} src="svg/gpu.svg" /> GPU: {this.props.gpu}</span>
              <span style={styles.specSpan}><img style={styles.specLogo} src="svg/ram.svg" /> Ram: {this.props.ram}GB</span>
              <span style={styles.specSpan}><img style={styles.specLogo} src="svg/disks.svg" /> Storage: {storage}</span>
              <span style={styles.specSpan}><img style={styles.specLogo} src="svg/display.svg" /> Display: {this.props.display}</span>
            </div>
          </div>
        </td>
      </tr>
    );
  };
}

export default LaptopMore;
