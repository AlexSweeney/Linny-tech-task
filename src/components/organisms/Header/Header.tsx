import colors from "../../../theme/colors";
import NavButton from "../../atoms/NavButton/NavButton";
import NavDropdown from "../../molecules/NavDropdown/NavDropdown";
import NavBar from "../../molecules/NavBar/NavBar";

const Header = () => {
  const navContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '92px',
    width: '100%',
    background: colors.darkGrey,
    color: colors.grey,
    padding: '0 32px',
    'box-sizing': 'border-box',
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
    <div style={navContainerStyle}>
      <h1 style={logoStyle}>SuperNet</h1>

      <NavBar items={navBarItems}/>
      <NavDropdown items={navDropdownItems}/>
    </div>
  );
}

export default Header;