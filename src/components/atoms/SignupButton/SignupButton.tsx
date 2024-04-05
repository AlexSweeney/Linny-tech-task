import colors from '../../../theme/colors';
import GoogleLogo from '../../../icons/GoogleLogo';
import GitHubLogo from '../../../icons/GitHubLogo';
import EmailIcon from '../../../icons/EmailIcon';

interface SignupButtonProps {
  text: String;
  color: 'black'|'green',
  active: boolean,
  icon: 'google'|'github'|'email',
  style?: object
}

const SignupButton = ({
  text,
  color,
  active,
  icon,
  style
}: SignupButtonProps) => {
  const backgroundColors = {
    'black': colors.black,
    'green': colors.green,
  };

  const icons = {
    'google': GoogleLogo,
    'github': GitHubLogo,
    'email': EmailIcon
  };

  const Icon = icons[icon];

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '360px',
    height: '56px',
    opacity: active ? 1 : 0.6,
    background: backgroundColors[color],
    border: 'none',
    color: colors.white,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '4px',
    ...style
  };

  const iconContainer = {
    width: '24px',
    height: '24px',
    marginRight: '8px'
  };

  const textContainer = {
    marginLeft: '8px'
  }

  return (
    <button style={buttonStyle}>
      <div style={iconContainer}>
        <Icon/>
      </div>
      <div style={textContainer}>
        {text}
      </div> 
    </button>
  )
};

export default SignupButton;