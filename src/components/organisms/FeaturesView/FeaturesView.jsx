import FeaturesCard from "../../molecules/FeaturesCard/FeaturesCard";
import EdgeNetwork from "../../../images/EdgeNetwork.png";
import Security from "../../../images/Security.png";
import DDOS from "../../../images/DDOS.png";
import colors from "../../../theme/colors";

const FeaturesView = () => {
  const screenTwoContainer = {
    minHeight: 'calc(100vh - 92px)',
    width: '100%',
    background: colors.darkGrey,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '48px'
  };

  const featuresTextContainer = {
    maxWidth: '500px',
    'text-align': 'center',
    marginBottom: '16px',
  };

  const featuresCardContainer = {
    width: '100%',
    marginBottom: '32px'
  };

  const featuresRow = {
    display: 'flex',
    justifyContent: 'center',
    'flex-wrap': 'wrap',
    heigth: '200px',
  };

  const featuresWrapper = {
    maxWidth: '1310px',
    width: '100%',
    display: 'flex',
    'flex-wrap': 'wrap',
    justifyContent: 'space-between',
  }

  return (
    <div style={screenTwoContainer}>
        <div style={featuresTextContainer}>
          <h2>Features</h2>
          <p>From edge locations world wide, to unparalleled security and DDOS protection, we’ve got you covered.</p>
        </div>
        <div style={featuresCardContainer}>
          <div style={featuresRow}>
            <div style={featuresWrapper}>
              <FeaturesCard image={<img src={EdgeNetwork}/>}>
                <h3>EDGE NETWORK</h3>
                <p>Discover our industry leading edge network, with over 300 edge nodes scattered around the globe.</p>
                <p>Give your customers the best performance in every corner of the world.</p>
              </FeaturesCard> 

              <FeaturesCard image={<img src={Security}/>}>
                <h3>SECURITY</h3> 
                <p>Stay safe from threats without slowing down.</p>
                <p>SuperNet surrounds and protects your entire ecosystem — clouds, apps, APIs, and users.</p>
              </FeaturesCard> 
            </div>
          </div>
          <div style={featuresRow}>
            <div style={featuresWrapper}>
              <FeaturesCard image={<img src={DDOS}/>}>
                <h3>DDOS PROTECTION</h3>
                <p>Highly rated web, application & network DDoS protection.</p>
                <p>Keeping bots and malicious users at bay.</p>
              </FeaturesCard> 

              <FeaturesCard image={<img src={EdgeNetwork}/>}>
                <h3>EDGE NETWORK</h3>
                <p>Discover our industry leading edge network, with over 300 edge nodes scattered around the globe.</p>
                <p>Give your customers the best performance in every corner of the world.</p>
              </FeaturesCard> 
            </div>
          </div>
        </div>
      </div>
  )
};

export default FeaturesView;