import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import { Badge, IconButton } from '@material-ui/core';



export default function Mail() {
    return (
        <IconButton
            edge="end"
            aria-label="show 4 new mails"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
        >
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
        </IconButton>
    );
}


