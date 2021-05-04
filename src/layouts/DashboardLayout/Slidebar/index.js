import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  IconButton,
  Collapse,
  Divider,
  Drawer
} from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import SlidebarList from "./SlidebarList";

const drawerWidth = 250;

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

export default function Slidebar({ open, closeSlidebar }) {
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
      {/* <SlideList /> */}
      <SlidebarList />
    </Drawer>
  );
}
