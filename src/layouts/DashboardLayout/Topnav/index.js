import React from 'react';
import { Menu as MenuIcon, } from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@material-ui/core';
import Search from './Search';
import Mail from './Mail';
import Notifications from './Notifications';
import Account from './Account';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
}))


export default function Topnav() {
    const classes = useStyles();

    return (
        <div className={classes.grow} >
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title}>
                    Dashboard
                </Typography>
                <Search />

                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <Mail />
                    <Notifications />
                    <Account />
                </div>

            </Toolbar>
        </AppBar>
        </div>
    )
}
