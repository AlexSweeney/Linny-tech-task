import colors from "../../../theme/colors";
import SignupForm from "../../molecules/SignupForm/SignupForm";
import Header from "../Header/Header";

const HomeScreen = () => {
  const heroContainer = { 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    height: '100%',
    background: colors.darkGrey,
    'box-sizing': 'border-box',
    paddingTop: 'calc(92px + 32px)',
    paddingBottom: '32px',
    paddingLeft: '10px',
    paddingRight: '10px',
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
    justifyContent: 'center',
    width: '100%',
    maxWidth: '525px',
    height: '460px',
    color: colors.lightGrey,
    fontFamily: 'inter',
  };

  const heroHeadingStyle = {
    fontSize: '44px',
    marginTop: '0',
    marginBottom: '0',
  };

  const heroTextStyle = {
    fontSize: '20px',
    marginBottom: '0',
  };

  const boldText = {
    fontWeight: 'bold',
  };

  const highlightText = {
    color: colors.green,
    textDecoration: 'underline',
  };

  return (
    <div>
      <Header/>
      <div style={heroContainer}>
        <div style={heroWrapper}>
           <div style={heroTextWrapper}>
            <h1 style={heroHeadingStyle}>Cloud Computing Developers Trust</h1>
            <p style={heroTextStyle}>Build, run, and secure your cloud workloads on <span style={boldText}>SuperNet Connected Cloud</span>, a massively distributed edge and cloud platform. <span style={highlightText}>Sign up</span> today or <span style={highlightText}>contact us</span> to learn more.</p>
          </div>
          <SignupForm/>
        </div>
      </div>
    </div>
  )
};

export default HomeScreen;