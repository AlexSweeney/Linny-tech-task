import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../../../theme/colors';

interface NavDropdown {
  items: string[]
}

const NavDropdown = ({
  items
}: NavDropdown) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOut = () => {
    setAnchorEl(null);
  };

  const menuIconStyle = {
    color: colors.lightPrimary,
    width: '50px',
    height: '50px',
  };

  return (
    <div className="navDropdownContainer">
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon style={menuIconStyle}/>
      </IconButton>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleOut}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          items.map(item =><MenuItem onClick={handleClose}>{item}</MenuItem> )
        }
      </Menu>
    </div>
  );
}

export default NavDropdown;