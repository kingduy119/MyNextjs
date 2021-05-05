import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  IconButton,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Collapse
} from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import SlidebarList from "./SlidebarList";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
}));

function Slidebar({ open, closeSlidebar }) {
  const classes = useStyles();

  return (
    <Drawer
      achor="left"
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
      onClose={closeSlidebar}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={closeSlidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <SlidebarList />
    </Drawer>
  );
}

// Response Navigation
// ----------------------------------------------------------
const useStylesResponsive = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

function SlidebarResLayout({ isMobileOpen, handleDrawerToggle }) {
  const classes = useStylesResponsive();
  const theme = useTheme();
  // const container =
  //   typeof window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <SlidebarList />
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="slidebar responsive">
      <Hidden smUp implementation="css">
        <Drawer
          // container={container}
          variant="temporary"
          achor={theme.direction === "rtl" ? "right" : "left"}
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
SlidebarResLayout.propTypes = {
  isMobileOpen: PropTypes.bool
};

export default SlidebarResLayout;
