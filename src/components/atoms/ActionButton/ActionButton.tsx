import colors from '../../../theme/colors';

interface ActionButtonProps {
  text: String;
  color: 'green'|'black';
}

const ActionButton = ({
  text,
  color
}: ActionButtonProps) => {
  const backgroundColors = {
    'green': colors.green,
    'black': colors.black,
  };

  const borders = {
    'green': 'none',
    'black': `1px solid ${colors.grey}`
  }

  const buttonStyle = {
    width: '250px',
    height: '72px',
    background: backgroundColors[color],
    border: borders[color],
    color: colors.white,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '20px',
    borderRadius: '4px'
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  )
};

export default ActionButton;