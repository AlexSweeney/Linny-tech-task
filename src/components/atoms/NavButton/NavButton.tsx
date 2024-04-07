import colors from '../../../theme/colors';
import './../../../theme/buttons.css';

interface NavButtonProps {
  text: String;
}

const NavButton = ({
  text
}: NavButtonProps) => {
  const buttonStyle = {
    width: '124px',
    height: '39px',
    border: 'none',
    color: colors.lightSecondary,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '4px'
  };

  return (
    <button style={buttonStyle} className='secondaryButton'>
      {text}
    </button>
  )
};

export default NavButton;