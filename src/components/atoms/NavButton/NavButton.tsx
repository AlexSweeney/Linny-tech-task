import colors from '../../../theme/colors';

interface NavButtonProps {
  text: String;
}

const NavButton = ({
  text
}: NavButtonProps) => {
  const buttonStyle = {
    width: '124px',
    height: '39px',
    background: colors.green,
    border: 'none',
    color: colors.white,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '4px'
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  )
};

export default NavButton;