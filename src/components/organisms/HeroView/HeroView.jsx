import './../../../theme/text.css';
import './HeroView.css';
import SignupForm from "../../molecules/SignupForm/SignupForm";

const HeroView = () => {
  const heroContainer = { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    'box-sizing': 'border-box',
    padding: '32px 10px',
    width: '100%',
    minHeight: 'calc(100vh - 92px)',
  };

  const heroWrapper = {
    display: 'flex',
    justifyContent: 'space-around',
    'flex-wrap': 'wrap',
    maxWidth: '1079px',
    width: '100%'
  };

  const heroTextWrapper = {
    display: 'flex',
    'flex-direction': 'column',
    width: '100%',
    maxWidth: '525px',
  };

  const heroHeadingStyle = {
    marginTop: '0',
    marginBottom: '0',
  };

  const heroTextStyle = {
    marginBottom: '0',
  };

  return (
    <div style={heroContainer} className='heroContainer'>
      <div style={heroWrapper}>
        <div style={heroTextWrapper} className='heroTextWrapper'>
          <h2 style={heroHeadingStyle}>Cloud Computing Developers Trust</h2>
          <p style={heroTextStyle}>Build, run, and secure your cloud workloads on <span className="bold">SuperNet Connected Cloud</span>, a massively distributed edge and cloud platform. <span className="highlight">Sign up</span> today or <span className="highlight">contact us</span> to learn more.</p>
        </div>
        <SignupForm/>
      </div>
    </div> 
  )
};

export default HeroView;