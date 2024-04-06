import colors from "../../../theme/colors";
import NavBar from "../NavBar/NavBar";
import './Footer.css';

const Footer = () => {
  const containerStyle = {
    display: 'flex',
    height: '83px',
    width: '100%',
    padding: '0 32px',
    'flex-direction': 'row',
    justifyContent: 'center',
    background: colors.black,
    'box-sizing': 'border-box',
  };

  const wrapperStyle = {
    width: '100%',
    height: '100%',
    'max-width': '1200px',
    display: 'flex',
    'justify-content': 'space-between',
    alignItems: 'center',
    padding: '0 10px',
  };

  const navBarItems = [
    'Privacy Policy',
    'Cookies',
    'Accessibility',
  ];

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <p>Copyright 2024</p>

        <div className="footerNavBarContainer">
          <NavBar items={navBarItems}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;