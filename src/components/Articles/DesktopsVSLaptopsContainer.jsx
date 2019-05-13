import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

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
  centerP: {
    margin: '10px',
    textAlign: 'center',
  }
};

class DesktopsVSLaptopsContainer extends React.Component {
  render(){
    return(
    <div>
      <Card style={styles.container}>
        <CardTitle titleStyle={styles.title} title="Laptops vs Desktops"/>
        <CardText style={styles.text}>
          <p style={styles.p}>So, you are looking for a laptop and you would also like to be able of playing the latest and sexiest games right?</p>

        <p style={styles.p}>Then you started lurking the internet for recommendations online and probably found comments like of "JUST GET A GAMING DESKTOP PCMASTERACE (tm)" and a general hate for
        gaming laptops. This is a really misinformed opinion.</p>

        <p style={styles.p}>In the past gaming laptops used to be a lot more expensive than the equivalent desktop and the graphics cards found on these laptops were not at par with the desktop hardware. But in modern times the price of gaming laptops has both come down and the difference in terms of performance of laptop and desktop performance has been reduced.</p>

        <p style={styles.p}>With that being said, laptops are still mildly slower and more expensive than desktops. So now make yourself a question:</p>

        <p style={styles.centerP}>Do you <span style={{fontWeight:'bold'}}>need</span> a laptop?</p>

        <p style={styles.p}>Maybe you are a college student or a starbucks dweller freelancer, or simply you don’t have the space in your house for a desktop PC. In any case, if the answer to the question is yes then there is no debate to see if you should instead get a gaming desktop. Just get a laptop, becuase it's what your lifestyle requires.</p>

        <p style={styles.p}>Yet one could argue this, saying for instance: What about getting a cheaper laptop and a powerful gaming desktop?</p>

        <p style={styles.p}>In most cases this is a terrible idea, in terms of pricing it’s usually more expensive to build a gaming desktop and buy a low end laptop rather than just getting an equivalent gaming laptop (will see more about this later) and dividing your digital life in 2 devices can be problematic to deal with: Needing that one archive from the laptop while you are on the desktop, needing the performance of the desktop to do something while you're with the laptop on a trip. You would be surprised how commonly little things like this occur on a daily basis, and if you will these little things could get to you just get a laptop.</p>

        <h3 style={styles.p}>The price of portability.</h3>

        <p style={styles.p}>We also mention that albeit the prices have come down, gaming laptops are still more expensive than desktop. The question now is how much? For answering this we will look at a case example of a laptop and a desktop with similar specifications.</p>

        <p style={styles.p}>For the laptop we chose the Sager NP8651 featuring a GTX 1060 and an i7-6700HQ processor, quite nice and quite capable. As of today you can get it for around 1300 dollars depending on the seller.</p>

        <p style={styles.p}>For the desktop we chose <a href="https://pcpartpicker.com/guide/jBWG3C/modest-gaming-build">this pc</a> from a popular guide on PCPartPicker, it features an i5-6500 and also a GTX 1060, overall a nice build for about 800 dollars.</p>

        <p style={styles.p}>The gtx 1060 should perform about the same in both machines and the 2 cpus are about has powerful (in this case the laptop cpu is barely more powerful, but in any case they mark about the same in benchmarks). For gaming and general use, this two machines should perform very similar.</p>

        <p style={styles.p}>We are still not comparing apples to apples here, a laptop also has a monitor, sound speakers and a keyboard. You can get a modest 1080p monitor like <a href="https://www.amazon.com/Acer-H236HL-bid-23-Inch-Widescreen/dp/B00AZMLIDQ">this one</a> for around 130-120 dollars and let’s assume cheap speakers and a keyboard for about 50 dollars. In total these accessories sum to around 180-190 dollars, bringing the grand total of our desktop PC to about 980 dollars.</p>

        <p style={styles.p}>Now let’s see: 1300 - 980 = 320 dollars.</p>

        <p style={styles.p}><span style={{fontWeight: 'bold'}}>320 dollars.</span> This number right here is the price of portability and it stays about the same for laptops in the 1000-2500 dollars range. When you buy a gaming laptop around 320 dollars is what you are paying for the ability of putting it on a backpack.</p>

        <p style={styles.p}>But is it a good value? We will let you decide that.</p>

        <p style={styles.p}>In the end you should buy whatever fits your needs best no matter what the market or the PC community wants you to believe, there is a reason why the PC market (including laptops) is as diverse as it is and that is reason is fundamented in the differnet necesities of gamers.</p>
        </CardText>
      </Card>
    </div>
    )
  }
}

export default DesktopsVSLaptopsContainer;
