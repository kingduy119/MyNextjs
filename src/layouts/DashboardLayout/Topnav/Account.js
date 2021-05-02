import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Badge, IconButton } from '@material-ui/core';



export default function Account() {
    return (
        <IconButton
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
    );
}


