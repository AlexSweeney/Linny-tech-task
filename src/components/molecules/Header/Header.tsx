import colors from "../../../theme/colors";
import NavButton from "../../atoms/NavButton/NavButton";
import NavDropdown from "../NavDropdown/NavDropdown";
import NavBar from "../NavBar/NavBar";
import './Header.css';

const Header = () => {
  const containerStyle = {
    display: 'flex',
    'flex-direction': 'row',
    justifyContent: 'center',
    position: 'fixed' as 'fixed',
    'justify-content': 'center',
    height: '92px',
    width: '100%',
    background: colors.primary,
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
    <div style={containerStyle} className="headerContainer">
      <div style={wrapperStyle}>
        <h1>SuperNet</h1>

        <div className="navBarContainer">
          <NavBar items={navBarItems}/>
        </div>
        <div className="navDropdownContainer">
          <NavDropdown items={navDropdownItems}/>
        </div>
      </div>
    </div>
  );
}

export default Header;