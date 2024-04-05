import colors from "../../../theme/colors";
import SignupButton from "../../atoms/SignupButton/SignupButton";

const SignupForm = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '506px',
    height: '460px',
    background: colors.darkGrey,
  };

  const wrapperStyle = {
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '378px',
  };

  const buttonStyle = {
    marginBottom: '24px'
  };

  const lineStyle = {
    border: `1px solid ${colors.black}`,
    width: '360px',
    marginTop: '0',
    marginBottom: '24px'
  };

  const textStyle = {
    color: colors.white,
    fontFamily: 'inter',
    fontWeight: 'regular',
    fontSize: '14px',
    marginTop: '0',
    'text-align': 'center',
  };

  const textHighlightStyle = {
    color: colors.green,
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <SignupButton text="Sign up with Google" color="green" active={false} icon="google" style={buttonStyle}/>
        <hr style={lineStyle}/>
        <SignupButton text="GitHub" color="black" active={true} icon="github" style={buttonStyle}/> 
        <SignupButton text="Email" color="black" active={true} icon="email" style={buttonStyle}/> 

        <p style={textStyle}>By providing your email address or using a single sign-on provider to create an account, you agree to our <span style={textHighlightStyle}>Terms of Service</span> and that you have reviewed our <span style={textHighlightStyle}>Privacy Policy</span> and <span style={textHighlightStyle}>Cookie Policy.</span></p>
      </div>
    </div>
  );
}

export default SignupForm;