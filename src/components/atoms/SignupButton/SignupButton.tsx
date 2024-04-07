import colors from '../../../theme/colors';
import GoogleLogo from '../../../icons/GoogleLogo';
import GitHubLogo from '../../../icons/GitHubLogo';
import EmailIcon from '../../../icons/EmailIcon';
import './../../../theme/buttons.css';

interface SignupButtonProps {
  text: String;
  color: 'light'|'dark',
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
  const classNames = {
    'light': 'secondaryButton',
    'dark': 'secondaryDarkButton',
  };

  const disabledClassNames = {
    'light': 'secondaryButtonDisabled',
    'dark': 'secondaryDarkButtonDisabled',
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
    border: 'none',
    color: colors.lightSecondary,
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
  };

  return (
    <button style={buttonStyle} className={active ? classNames[color] : disabledClassNames[color]}>
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