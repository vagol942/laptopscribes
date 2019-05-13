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

class HeadsetsContainer extends React.Component {
  render(){
    return(
    <div>
      <Card style={styles.container}>
        <CardTitle titleStyle={styles.title} title="Headsets for gaming recomendations"/>
        <CardText style={styles.text}>
            <p style={styles.p}>Gaming headsets are a pretty controversial topic, mostly because manufactures used to put terrible parts on them and charging a exorbitant sums for them, and while in recent years things have improved in all aspects (read: they are cheaper and better made) there are still some caveats that demand some research from the consumer.</p>

            <p style={styles.p}>Notice that this article is called “eadsets for gaming recomendations” and not gaming headsets recomendations” because the only really advantage a gaming headset as over a “regular” headset is a more gaming-ish look that you might or might not want. Still gaming headsets are feature in this list for those taste lead towards their appeal.</p>

            <p style={styles.p}>Also, if you are looking for a headset that also doubles as a decent set of headphones to hear your music while waiting for the bus every morning (like most people would) you should especially look to the headsets that feature a removable Mic in this list.</p>

            <p style={styles.p}>Most of headsets have a dedicated sound and mic jacks and not all laptops have them as some include a single combo jack for both. If your laptop only have a single 3.5mm jack make sure to get a splitter like <a href="https://www.amazon.com/Extrasensory-Devices-ESDHW011-Headphone-Microphone/dp/B006T65CXE">this one</a>.</p>

            <p style={styles.p}>Others are plugged via USB, which means are not usable with your phone.</p>



            <h2 style={styles.subTitle}>Sennheiser GAME ONE PC</h2>

            <CardMedia style={styles.cardMedia}>
              <img style={styles.imgMedia} src="/img/articles/headsets/sennheiser-one.jpg" />
            </CardMedia>

            <p style={styles.p}>Let’s start the list with a classic fan favorite, Sennheiser is mostly known for their semiprofesional set of products, their incredible noise-cancellation technology and they implement this principles on this gaming headset.</p>

            <p style={styles.p}>In terms of sound quality they are stereo speakers and don’t implement any extra or undesirable effects sound distortion techniques making most sound coming from your games sound how they were intended by the developer.</p>

            <p style={styles.p}>The construction is mostly glossy plastic, which might it look a little bit gross if you don’t take proper care cleaning them from time to time. The mic is non removable but has this nifty feature that mutes it when you put it up, that way you can have your games in open mic mode and mute it if you need to speak with someone on the real world.</p>

            <p style={styles.p}>This headset might be a little bit more expensive than other options in this list, but if your budget is around the pricetag, this is the headset you should get.</p>

            <ul style={styles.buttonList}>
              <li>
                <RaisedButton
                label="BUY ON AMAZON"
                labelPosition="after"
                primary={true}
                icon={<FontIcon className="fa fa-amazon" />}
                style={styles.button}
                onClick={()=>{
                  window.open("http://amzn.to/2j7DHHp")
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
                  window.open("http://www.pcmag.com/article2/0,2817,2429509,00.asp")
                }}
                />
                <RaisedButton
                label="TrustedReviews REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.trustedreviews.com/sennheiser-g4me-one-review")
                }}
                />
              </li>
            </ul>

            <h2 style={styles.subTitle}>Sony Extra-bass MX450AP</h2>

            <CardMedia style={styles.cardMedia}>
              <img style={styles.imgMedia} src="/img/articles/headsets/Sony Extra-bass MX450ap.jpg" />
            </CardMedia>

            <p style={styles.p}>This ones are not technically a “Headset” because they don’t have a dedicated mouth microphone. But they do have a small microphone, it is located on the cable besides the control button as it is intended to be used to respond to calls on your phone.</p>

            <p style={styles.p}>This little mic works surprisingly well for voice chat in gaming and people will have no problem hearing you. The sound quality is amazing, period. They sound as good as most headphones that double them in price, the only caveat is that, as the name implies they have the tendency to ramp up the bass which works well for electronic music for example, but might not of your liking (if you are unsure about this, this is probably not a problem for you).</p>

            <p style={styles.p}>Also they look like regular headphones, so they win in the “I don’t want to look like an alien when I’m using them in public” department.</p>

            <p style={styles.p}>Did I mention, they cost less than 50 bucks? (And I’ve seen them for sale for as low as 25).</p>

            <p style={styles.p}>To be honest if you are not an audiophile, and the idea of paying 100+ dollars for audio sound insane to you, this is the kind of solution you should be looking for. It’s hard to regret a purchase like this.</p>

            <ul style={styles.buttonList}>
              <li>
                <RaisedButton
                label="BUY ON AMAZON"
                labelPosition="after"
                primary={true}
                icon={<FontIcon className="fa fa-amazon" />}
                style={styles.button}
                onClick={()=>{
                  window.open("http://amzn.to/2iXSVl8")
                }}
                />
              </li>
              <li>
                <RaisedButton
                label="TrustedReviews REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.trustedreviews.com/sony-mdr-xb450bv-review")
                }}
                />
              </li>
            </ul>




            <h2 style={styles.subTitle}>Creative Fatal1ty Gaming</h2>

            <CardMedia style={styles.cardMedia} >
              <img style={styles.imgMedia} src="/img/articles/headsets/Creative Fatal1ty Gaming.jpg" />
            </CardMedia>

            <p style={styles.p}>When I sat down to write this article I was in a Starbucks (I know...) and in my table there were 3 other guys all using this specific headset. It was unsettling.</p>

            <p style={styles.p}>Anyways, this headset might not be the prettiest one out there (but to be honest it look better in person than in pictures as the glossy effect of the red sides are not as apparent)	but that’s where the negatives end.</p>

            <p style={styles.p}>The sound quality is excellent without noticeable distortion and also the noise-cancellation technology this headset helps uses when gaming in a lousy environment; something some more expensive headsets lack.</p>

            <p style={styles.p}>The mic (which is removable) works well for even highly tactical and communication focus games, if you see yourself using a lot TeamSpeaker/Mumble/Discord this is the most solid option you can get for the money.</p>

            <ul style={styles.buttonList}>
              <li>
                <RaisedButton
                label="BUY ON AMAZON"
                labelPosition="after"
                primary={true}
                icon={<FontIcon className="fa fa-amazon" />}
                style={styles.button}
                onClick={()=>{
                  window.open("http://amzn.to/2j7GQXO")
                }}
                />
              </li>
              <li>
                <RaisedButton
                label="TechRadar REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.techradar.com/reviews/pc-mac/peripherals/speakers-and-headphones/headsets-and-headphones/fatal1ty-usb-gaming-headset-60154/review")
                }}
                />
              </li>
            </ul>



            <h2 style={styles.subTitle}>Logitech G633</h2>

            <CardMedia style={styles.cardMedia}>
              <img style={styles.imgMedia} src="/img/articles/headsets/Logitech G633.png" />
            </CardMedia>

            <p style={styles.p}>The Logitech G633 is not the cheapest, but I’ve been using them has my daily drivers for sometime now without trouble. The build quality is strong and you can throw them in you backpack without much concern for easy transportation.</p>

            <p style={styles.p}>In terms of aesthetics they definitely yell “gaming look” but the muted blue accent on top of the otherwise black construct give it a discreet look if that’s something that matters to you. The mic is non-removable but if folds seamlessly on the right headphone.</p>

            <p style={styles.p}>The programmable buttons on the back are easy to use (unexpectedly to be honest) and come quite handy for doing stuff like muting the microphone, they rest of the controllers are found in the cable as you would expect.</p>

            <p style={styles.p}>Both the sound quality and the microphone work as you would expect in this price bracket. I was actually surprised by how well the logitech 7.1 audio implementation worked on this headset as I used to believe emulating a surround system on close headphones was a stupid idea, but it works so well I find myself forgetting I’m using a headset.</p>

            <ul style={styles.buttonList}>
              <li>
                <RaisedButton
                label="BUY ON AMAZON"
                labelPosition="after"
                primary={true}
                icon={<FontIcon className="fa fa-amazon" />}
                style={styles.button}
                onClick={()=>{
                  window.open("http://amzn.to/2jiMhSW")
                }}
                />
              </li>
              <li>
                <RaisedButton
                label="PCGAMER REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.pcgamer.com/logitech-g633-artemis-spectrum-gaming-headset-review/")
                }}
                />
                <RaisedButton
                label="TOMSGUIDE REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.tomsguide.com/us/logitech-g633-artemis-spectrum,review-3178.html")
                }}
                />
              </li>
            </ul>


            <h2 style={styles.subTitle}>HyperX Cloud II Gaming Headset</h2>

            <CardMedia style={styles.cardMedia}>
              <img style={styles.imgMedia} src="/img/articles/headsets/HyperX Cloud II Gaming Headset.jpg" />
            </CardMedia>

            <p style={styles.p}>I wasn’t expecting Kingston out of everyone to make a headset like the Clouds, they have all the bells and whistles you would expect from a gaming headset. The sound quality is good for gaming and music, the mic is adequate and has noise cancellation (which is not the best, but helps to mute a load keyboard for example).</p>

            <p style={styles.p}>The mic is removable (thanks Kingston), it features a single mic and sound combo jack compatible with most laptops and your phone* (thanks Kingston), it’s made mostly of plastic except with the exception of the casquet frame made of aluminum.</p>

            <p style={styles.p}>This headset works really well in gaming and non-gaming scenarios, if you are only looking for a single pair of headphones for all your use cases this ones are really good at that.</p>

            <ul style={styles.buttonList}>
              <li>
                <RaisedButton
                label="BUY ON AMAZON"
                labelPosition="after"
                primary={true}
                icon={<FontIcon className="fa fa-amazon" />}
                style={styles.button}
                onClick={()=>{
                  window.open("http://amzn.to/2iTd5Kv")
                }}
                />
              </li>
              <li>
                <RaisedButton
                label="TrustedReviews REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.trustedreviews.com/kingston-hyperx-cloud-ii-review")
                }}
                />
                <RaisedButton
                label="PCGAMER REVIEW"
                primary={true}
                style={styles.button}
                icon={<FontIcon className="fa fa-external-link" />}
                onClick={()=>{
                  window.open("http://www.pcgamer.com/kingston-hyperx-cloud-ii-review/")
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

export default HeadsetsContainer;
