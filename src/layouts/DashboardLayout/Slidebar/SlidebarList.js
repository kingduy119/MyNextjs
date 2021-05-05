import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import {
  List,
  ListItem,
  ListItemText,
  // ListSubheader,
  Collapse
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const config = [
  {
    href: "/",
    title: "Home"
  },
  {
    title: "Material UI",
    items: [
      { href: "/mui-dashboard", title: "Home" },
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

const useStyles = makeStyles((theme) => ({
  list: {
    // width: "100%",
    // maxWidth: drawerWidth,
    // backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

// #1 Item
const Item = ({ title, href, ...other }) => (
  <ListItem {...other} button>
    <Link href={href}>
      <ListItemText primary={title} />
    </Link>
  </ListItem>
);
Item.propTypes = {
  href: PropTypes.string
};

// #2 Nest items
const ItemGroup = ({ title, items }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* ---------- Sub ---------- */}
      <ListItem button onClick={() => setIsOpen(!isOpen)}>
        <ListItemText primary={title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {/* ---------- Items ---------- */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div">
          {items.map((docs) => (
            <Item {...docs} className={classes.nested} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
ItemGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.docsect)
};

export default function SlidebarList() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {config.map((docs) =>
        !docs.items ? <Item {...docs} /> : <ItemGroup {...docs} />
      )}
    </List>
  );
}
