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

class MiceContainer extends React.Component {
  render(){
    return(
    <div>
      <Card style={styles.container}>
        <CardTitle titleStyle={styles.title} title="Gaming Mice recomendations"/>
        <CardText style={styles.text}>
          <p style={styles.p}>So you bought for new flashy computer and you are looking for a good quality mouse to use with it, but has it’s with life, ice cream flavors and chicken cooking styles, there is no one-size-fits-all solution. Some are better for certain games, some are more comfortable and some are better looking.</p>

          <p style={styles.p}>This guide features somewhat traditional mice. Ones that resemble the idea of what your mom probably thinks a mouse is. You know, stuff not like this:</p>

          <CardMedia style={styles.cardMedia} >
            <img style={styles.imgMedia} src="/img/articles/mice/trackball.jpg" />
          </CardMedia>
          <p style={{
            textAlign:'center',
            fontStyle: 'italic',
          }}>Btw, this thing is amazing.</p>


          <h2 style={styles.subTitle}>Zowie FK2</h2>

          <CardMedia style={styles.cardMedia}>
            <img style={styles.imgMedia} src="/img/articles/mice/Zowie FK2.jpg" />
          </CardMedia>


          <p style={styles.p}>If you are looking for a well built mouse (like insanely well built) with a great sensor that doesn’t vomit the “I’m a GAMER” look, the Zowie FK2 is a nice little mouse, it features 2 buttons at each side and it’s perfectly symmetrical, ideal for left handed gamers looking for a mouse and a very simple and sleek design.</p>

          <p style={styles.p}>Alternately if you have big hands, you can get the Zowie FK1, which is basically the same but bigger.</p>

          <ul style={styles.buttonList}>
            <li>
              <RaisedButton
              label="BUY ON AMAZON"
              labelPosition="after"
              primary={true}
              icon={<FontIcon className="fa fa-amazon" />}
              style={styles.button}
              onClick={()=>{
                window.open("http://amzn.to/2i8kRkS")
              }}
              />
            </li>
            <li>
              <RaisedButton
              label="Bit-Tech REVIEW"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-external-link" />}
              onClick={()=>{
                window.open("http://www.bit-tech.net/hardware/peripherals/2015/01/19/zowie-fk2-review/1")
              }}
              />
            </li>
          </ul>


          <h2 style={styles.subTitle}>Corsair M65</h2>

          <CardMedia style={styles.cardMedia}>
            <img style={styles.imgMedia} src="/img/articles/mice/Corsair M65.png" />
          </CardMedia>

          <p style={styles.p}>This one is another great small mouse, it’s design is asymmetrical with one extra thumb button that can come handy. It also features a variable weights system that you might appealing.
          Most configurations like the DPI settings are adjusted on a Corsair application (which kind of sucks) and it’s available in 3 colors (it that is important for you for some reason).</p>

          <ul style={styles.buttonList}>
            <li>
              <RaisedButton
              label="BUY ON AMAZON"
              labelPosition="after"
              primary={true}
              icon={<FontIcon className="fa fa-amazon" />}
              style={styles.button}
              onClick={()=>{
                window.open("http://amzn.to/2j7z6ow")
              }}
              />
            </li>
            <li>
              <RaisedButton
              label="KitGuru REVIEW"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-external-link" />}
              onClick={()=>{
                window.open("http://www.kitguru.net/peripherals/dominic-moass/corsair-m65-pro-rgb-mouse-review/")
              }}
              />
              <RaisedButton
              label="TOMSGUIDE REVIEW"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-external-link" />}
              onClick={()=>{
                window.open("http://www.tomsguide.com/us/corsair-vengeance-m65,review-2084.html")
              }}
              />
            </li>
          </ul>

          <h2 style={styles.subTitle}>RIVAL 700</h2>

          <CardMedia style={styles.cardMedia}>
            <img style={styles.imgMedia} src="/img/articles/mice/RIVAL 700.png" />
          </CardMedia>

          The Steelseries Rival 700 might be gimmicky with it’s little OLED screen and flashy lights, but if you ignore that non-sense you will find a pretty decent mouse. Steelseries has always work with great sensors and the Rival 700 is no exception. Bear in mind that the acceleration algorithm this mouse uses might be a little bit aggressive for some people. You should look at the Zowie above if you are looking for a more vanilla experience.


          <ul style={styles.buttonList}>
            <li>
              <RaisedButton
              label="BUY ON AMAZON"
              labelPosition="after"
              primary={true}
              icon={<FontIcon className="fa fa-amazon" />}
              style={styles.button}
              onClick={()=>{
                window.open("http://amzn.to/2j7xfjL")
              }}
              />
            </li>
            <li>
              <RaisedButton
              label="PCMAG REVIEW"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-external-link" />}
              onClick={()=>{
                window.open("http://www.pcmag.com/review/346261/steelseries-rival-700")
              }}
              />
              <RaisedButton
              label="DESTRUCTOID REVIEW"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-external-link" />}
              onClick={()=>{
                window.open("https://www.destructoid.com/review-steelseries-rival-700-mouse-372831.phtml")
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

export default MiceContainer;
