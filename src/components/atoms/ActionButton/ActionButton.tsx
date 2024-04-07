import colors from '../../../theme/colors';

interface ActionButtonProps {
  text: String;
  color: 'light'|'dark';
}

const ActionButton = ({
  text,
  color
}: ActionButtonProps) => {
  const backgroundColors = {
    'light': colors.secondary,
    'dark': colors.darkSecondary,
  };

  const classNames = {
    'light': 'secondaryButton',
    'dark': 'secondaryDarkButton'
  };

  const borders = {
    'light': 'none',
    'dark': `1px solid ${colors.lightPrimary}`
  };

  const buttonStyle = {
    width: '250px',
    height: '72px',
    border: borders[color],
    color: colors.lightSecondary,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '20px',
    borderRadius: '4px',
    marginBottom: '16px'
  };

  return (
    <button style={buttonStyle} className={classNames[color]}>
      {text}
    </button>
  )
};

export default ActionButton;