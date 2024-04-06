import colors from "../../../theme/colors";
import NavButton from "../../atoms/NavButton/NavButton";
import NavDropdown from "../NavDropdown/NavDropdown";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const containerStyle = {
    display: 'flex',
    'flex-direction': 'row',
    justifyContent: 'center',
    position: 'fixed',
    'justify-content': 'center',
    height: '92px',
    width: '100%',
    background: colors.grey,
    color: colors.lightGrey,
    padding: '0 32px',
    'box-sizing': 'border-box',
    'z-index': '99999',
    top: '0',
    left: '0',
  };

  const wrapperStyle = {
    width: '100%',
    'max-width': '1200px',
    display: 'flex',
    'justify-content': 'space-between',
  };

  const logoStyle = {
    fontSize: '36px',
    fontFamily: 'Inter',
    fontWeight: 'normal',
  };

  const navBarItems = [
    'Feature',
    'Edge Network',
    'Pricing',
    <NavButton text="Sign Up"/>
  ];

  const navDropdownItems = [
    'Feature',
    'Edge Network',
    'Pricing',
    'Sign Up',
  ];

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <h1 style={logoStyle}>SuperNet</h1>

        <NavBar items={navBarItems}/>
        <NavDropdown items={navDropdownItems}/>
      </div>
    </div>
  );
}

export default Header;