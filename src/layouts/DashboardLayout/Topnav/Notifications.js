import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge, IconButton } from '@material-ui/core';



export default function Notifications() {
    return (
        <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
}


