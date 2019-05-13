import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    marginTop: '32px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '16px',
    color: '#212121',
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
  text: {
    maxWidth: '40em',
    margin: 'auto',
    fontSize: '16',
  },
  p: {
    marginBottom: '10px',
  },
  buttonList: {
    listStyle: 'none',
    marginLeft: '0',
    paddingLeft: '0',
  },
  button: {
    margin: '5px',
  },
  subTitle: {
    marginTop: '32px',
    marginBottom: '10px',
  },
  cardMedia: {
    maxWidth: "300px",
    textAlign: 'center',
    margin: 'auto',
  },
  imgMedia: {
    maxWidth: "100%",
    height: "auto",
  }
};

class BackpacksContainer extends React.Component {
  render(){
    return(
    <div>
      <Card style={styles.container}>
        <CardTitle titleStyle={styles.title} title="Backpack recomendations"/>
        <CardText style={styles.text}>
          <p style={styles.p}>Gaming laptops are on average heavier than regular laptops, and with that you might be concerned on how are you going to transport your machine.</p>

          <p style={styles.p}>Or maybe you never thought choosing a backpack was an important issue until now.</p>

          <p style={styles.p}>aybe you went for one of the slim laptops like the GS60 and this is pretty much a non-issue, or you might as well be on the other side of the spectrum with a 12 pounds machine with dual graphics cards and desktop-class CPU.</p>

          <p style={styles.p}>In both cases a well designed backpack can help make your daily commute easier.</p>



          <h2 style={styles.subTitle} >Herschel Supply Co. Retreat Multipurpose Backpack</h2>

          <CardMedia style={styles.cardMedia}>
            <img style={styles.imgMedia} src="/img/articles/backpacks/Herschel Supply Co. Retreat Multipurpose Backpack.jpg" />
          </CardMedia>


          <p style={styles.p}>If you are a looking for a less spartan design, this one is a well designed backpack that can fit laptops up to 15.6 inches (sorry 17-inch folks). The strips placement is really comfortable and the strips themselves have a lot of foam padding to make them easier to use for long trips.</p>

          <ul style={styles.buttonList}>
            <li>
              <RaisedButton
              label="BUY ON AMAZON"
              labelPosition="after"
              primary={true}
              icon={<FontIcon className="fa fa-amazon" />}
              style={styles.button}
              onClick={()=>{
                window.open("http://amzn.to/2j7AdF1")
              }}
              />
            </li>
          </ul>


          <h2 style={styles.subTitle} >Oakley Kitchen Sink Backpack</h2>

          <CardMedia style={styles.cardMedia}>
            <img style={styles.imgMedia} src="/img/articles/backpacks/Oakley Kitchen Sink Backpack.jpg" />
          </CardMedia>

          <p style={styles.p}>Have you ever said to yourself: “Man, I need a backpack for my laptop, a tent and enough food to survive in the North Pole for 3 months”, then you are looking for this and only this backpack.</p>

          <p style={styles.p}>As the name implies, you can fit a small family inside this thing or used as an emergency nuclear fallout shelter.</p>

          <p style={styles.p}>It features extra chest strips to make it easier to carry even when loaded, if you have a 17 inch laptop weighing  12 pounds or more this is one of the only backpacks that will allow you to commute with it comfortably.</p>

          <ul style={styles.buttonList}>
            <li>
              <RaisedButton
              label="BUY ON AMAZON"
              labelPosition="after"
              primary={true}
              icon={<FontIcon className="fa fa-amazon" />}
              style={styles.button}
              onClick={()=>{
                window.open("http://amzn.to/2i8szf7")
              }}
              />
            </li>
          </ul>



          <h2 style={styles.subTitle} >AmazonBasics Backpack for Laptops Up To 17-Inch</h2>

          <CardMedia style={styles.cardMedia}>
            <img src="/img/articles/backpacks/AmazonBasics Backpack for Laptops Up To 17-Inch.jpg" />
          </CardMedia>

          <p style={styles.p}>This AmazonBasics 17 inch backpack will get you cover for most part, it can fit a 17-inch laptop and it’s probably the cheapest you can find with the size for it. The strips are adequately placed allowing somewhat comforting use. The internal padding is not robust, so try to put your laptop on a sleeve when on the backpack.</p>

          <ul style={styles.buttonList}>
            <li>
              <RaisedButton
              label="BUY ON AMAZON"
              labelPosition="after"
              primary={true}
              icon={<FontIcon className="fa fa-amazon" />}
              style={styles.button}
              onClick={()=>{
                window.open("http://amzn.to/2i8tCeN")
              }}
              />
            </li>
          </ul>



        </CardText>
      </Card>
    </div>
    )
  }
}

export default BackpacksContainer;
