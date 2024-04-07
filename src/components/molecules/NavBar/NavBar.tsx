import { ReactElement } from "react";
import colors from "../../../theme/colors";
import './../../../theme/buttons.css';

interface NavBarProps {
  items: (string|ReactElement)[]
}

const NavBar = ({
  items
}: NavBarProps) => {
  const listStyle = {
    display: 'flex',
    'flex-direction': 'row',
    'list-style-type': 'none',
    overflow: 'hidden',
    'flex-wrap': 'wrap',
  };

  const getLinkStyle = (i: number, length: number) => {
    const isLast = i === length - 1;

    return {
      marginRight: isLast ? '0' : '24px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      display: 'flex',
      'align-items': 'center',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 'regular',
    }
  };

  return (
    <nav>
      <ul style={listStyle}>
        {
          items.map((item, i) => <li style={getLinkStyle(i, items.length)} className="link">{item}</li>)
        }
      </ul>
    </nav>
  )
}

export default NavBar;