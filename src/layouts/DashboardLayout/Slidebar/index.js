import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    IconButton,
    Collapse,
    Divider,
    Drawer,
} from '@material-ui/core';
import {
    ChevronLeft as ChevronLeftIcon,
    Send as SendIcon,
    Drafts as DraftsIcon,
    Star as StarIcon,
 } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    toolbarIcon: {

    },
    list: {
        width: '100%',
        maxWidth: 250,
        backgroundColor: theme.palette.background.paper,
    },
    fullList: {
        width: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const SlideList = () => {
    const classes = useStyles();
    let [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Ntested List Items
                </ListSubheader>
            }
            className={classes.list}
        >
            <ListItem button>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItem>
            <ListItem button onClick={handleOpen}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Nested items" />
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </ListItem>
        </List>
    )
}

export default function Slidebar({ open, closeSlidebar }) {
    const classes = useStyles();
    return (
        <Drawer
            achor="left"
            variant="permanent"
            // classes={{}}
            open={open}
            onClose={closeSlidebar}
        >
            <div className={classes.toolbarIcon}>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <SlideList />
        </Drawer>
    )
}




