import React from "react";
import clsx from "clsx";
import { Menu as MenuIcon } from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Search from "./Search";
import Mail from "./Mail";
import Notifications from "./Notifications";
import Account from "./Account";

const drawerW = 220;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width, margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerW,
    width: `calc(100% - ${drawerW}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));

const Topnav = ({ open, openSlidebar }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          onClick={openSlidebar}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Dashboard
        </Typography>
        {/* <Search /> */}

        <div className={classes.title} />
        <div className={classes.sectionDesktop}>
          <Mail />
          <Notifications />
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  );
};

// Response Navigation
// ----------------------------------------------------------
const useStylesResponse = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerW}px)`,
      marginLeft: drawerW
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

const TopbarResponse = ({ handleDrawerToggle }) => {
  const classes = useStylesResponse();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        {/*  */}
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
        {/*  */}
      </Toolbar>
    </AppBar>
  );
};

export default TopbarResponse;
