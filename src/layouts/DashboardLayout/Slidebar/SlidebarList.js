import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  IconButton,
  Collapse
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Slidebar from ".";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: drawerWidth,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const config = [
  {
    href: "#",
    title: "Sent mail"
  },
  {
    title: "Nesting #",
    items: [
      { href: "#", title: "Link" },
      { href: "#", title: "Link" },
      { href: "#", title: "Link" }
    ]
  },
  {
    title: "Nesting #",
    items: [
      { href: "#", title: "Link" },
      { href: "#", title: "Link" },
      { href: "#", title: "Link" }
    ]
  }
];

const SlidebarItem = ({ href, title, ...other }) => (
  <ListItem {...other} button>
    <Link href={href}>
      <ListItemText primary={title} />
    </Link>
  </ListItem>
);
SlidebarItem.propTypes = {
  href: PropTypes.string
};

const SlidebarNestedItems = ({ title, items }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem button onClick={() => setIsOpen(!isOpen)}>
        <ListItemText primary={title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div">
          {items.map((obj) => (
            <SlidebarItem {...obj} className={classes.nested} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
SlidebarNestedItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default function SlidebarList() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {config.map((obj) =>
        !obj.items ? (
          <SlidebarItem {...obj} />
        ) : (
          <SlidebarNestedItems {...obj} />
        )
      )}
    </List>
  );
}
