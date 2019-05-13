import React from 'react';
import uid from 'uid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import LaptopRating from './LaptopRating';


const styles = {
   table : {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'center'
   },
   card: {
       margin: "12px",
       maxWidth: "270px",
   },
   buyButton: {
    margin: "5px",
   },
   reviewButton: {
    margin: "5px",
   },
   specs: {
       display: 'flex',
       flexWrap: 'wrap',
   },
   specItem: {
       margin: "5px",
       display: 'flex',
       alignItems: 'center',
   },
   specSubItem: {
       margin: "3px"
   }
}

class LaptopMobileTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Cards = this.props.laptops.map(laptop => {
            return (
                <LaptopCard key={uid()} laptop={laptop} />
            )
        })
        return (
            <div style={styles.table}>
                {Cards}
            </div>
        )
    
    }
}

class LaptopCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const laptop = this.props.laptop;

        let buyIcon = <FontIcon className="fa fa-amazon" />
        let BuyLink = (
        <RaisedButton
            key={uid()} 
            primary
            style={styles.buyButton}
            label={"Buy on Amazon"}
            href={laptop.amazon_link}
            icon={buyIcon}
            target="_blank"
        >
        </RaisedButton>
        )

        const reviewIcon = <FontIcon className="fa fa-external-link" />
        const ReviewLink = (
        <RaisedButton
            key={uid()}
            style={styles.sellButton}
            icon={reviewIcon}
            label={laptop.review_name}
            secondary
            href={laptop.review_link}
            target="_blank"
        >
        </RaisedButton>
        )

        let ssd = laptop.ssd;
        let hdd = laptop.hdd;
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

        return (
                <div style={styles.card}>
                    <Card>
                        <CardMedia
                            overlay={
                                <CardTitle 
                                    title={laptop.name}
                                    subtitle={`$ ${laptop.price}`}
                                />
                            }
                        >
                        <img src={laptop.picture} />
                        </CardMedia>
                        <CardText>
                            {laptop.comments}
                        </CardText>
                        <CardText>
                            <div style={styles.specs}>
                                <div style={styles.specItem}>
                                    <img style={styles.specSubItem} src="svg/cpu-black.svg" />
                                    <div style={styles.specSubItem}>{laptop.processor}</div>
                                </div>
                                <div style={styles.specItem}>
                                    <img style={styles.specSubItem} src="svg/gpu-black.svg" />
                                    <div style={styles.specSubItem} >{laptop.gpu}</div>
                                </div>
                                <div style={styles.specItem}>
                                    <img style={styles.specSubItem} src="svg/ram-black.svg" />
                                    <div style={styles.specSubItem} >{laptop.ram}GB</div>
                                </div>
                                <div style={styles.specItem}>
                                    <img style={styles.specSubItem} src="svg/disks-black.svg" />
                                    <div style={styles.specSubItem} >{storage}</div>
                                </div>
                                <div style={styles.specItem}>
                                    <img style={styles.specSubItem} src="svg/display-black.svg" />
                                    <div style={styles.specSubItem} >{laptop.display_properties ? `${laptop.display} ${laptop.display_properties}` : laptop.display}</div>
                                </div>
                            </div>
                        </CardText>
                        <CardText>
                            <LaptopRating rating={laptop.rating} />
                        </CardText>
                        <CardActions>
                            { BuyLink }
                            { ReviewLink }
                        </ CardActions>
                    </Card>
                </div>
        )
    }
}

export default LaptopMobileTable;