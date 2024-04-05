import { ReactElement } from "react";
import colors from "../../../theme/colors";

interface NavBarProps {
  items: (string|ReactElement)[]
}

const NavBar = ({
  items
}: NavBarProps) => {
  const navStyle = {
    display: 'flex',
    'flex-direction': 'row',
    'list-style-type': 'none',
    overflow: 'hidden'
  };

  const getLinkStyle = (i: number, length: number) => {
    const isLast = i === length - 1;

    return {
      marginRight: isLast ? '0' : '24px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      display: 'flex',
      'align-items': 'center',
      color: colors.grey,
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 'regular',
    }
  };

  return (
    <nav>
      <ul style={navStyle}>
        {
          items.map((item, i) => <li style={getLinkStyle(i, items.length)}>{item}</li>)
        }
      </ul>
    </nav>
  )
}

export default NavBar;