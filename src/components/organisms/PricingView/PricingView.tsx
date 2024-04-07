import PricingCard from "../../molecules/PricingCard/PricingCard";
import colors from "../../../theme/colors";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import './PricingView.css';

const PricingView = () => {
  const containerStyle = {
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
  };

  const textContainerStyle = {
    maxWidth: '750px',
    'text-align': 'center',
    marginBottom: '48px',
    alignText: 'center',
    padding: '0 10px',
  };

  const headerStyle = {
    marginTop: '0',
  };

  const pricingCardContainerStyle = {
    width: '100%',
    maxWidth: '1060px',
    display: 'flex',
    'flex-wrap': 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '48px',
  };

  const actionContainerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
    width: '100%',
    background: colors.primary,
    paddingTop: '32px',
    paddingBottom: '12px',
    paddingLeft: '10px',
    paddingRight: '10px',
    'box-sizing': 'border-box',
  };

  const actionButtonContainerStyle = {
    maxWidth: '545px',
    width: '100%',
    display: 'flex',
    'flex-wrap': 'wrap',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h2>Pricing</h2>
        <p>Cut your cloud bills in half with bundled extras like DDoS Protection, cloud firewalls, and generous transfer.</p>
      </div>
      <div style={pricingCardContainerStyle} className="pricingCardContainer">
        <PricingCard size="medium" heading={<h3 className="redGradient">$9/mo <br></br>Standard</h3>}>
          <div>
            <p>10 GB of space</p>
            <p>Unlimited Traffic</p>
            <p>Forum Access</p>
            <p>Support at $25/hour</p>
          </div>
        </PricingCard>
        <PricingCard size="large" heading={<h3 className="greenGradient">$49/mo <br></br>Professional</h3>}>
          <div>
            <p>30 GB of space</p>
            <p>Unlimited Traffic</p>
            <p>Forum Access</p>
            <p>Support at $5/hour</p>
          </div>
        </PricingCard>
        <PricingCard size="medium" heading={<h3 className="blueGradient">$159/mo <br></br>Enterprise</h3>}>
          <div>
            <p>50 GB of space</p>
            <p>Unlimited Traffic</p>
            <p>Forum Access</p>
            <p>Free Support</p>
          </div>
        </PricingCard>
      </div>
      <div style={actionContainerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headerStyle}>Ready to get started or have questions?</h2>
          <p>Set up your free account today or contact a sales consultant to learn more.</p>
        </div>
        <div style={actionButtonContainerStyle} className="actionButtonContainer">
          <ActionButton text="Create Account" color="light"/>
          <ActionButton text="Contact Sales" color="dark"/>
        </div>
      </div>
    </div>
  )
};

export default PricingView;