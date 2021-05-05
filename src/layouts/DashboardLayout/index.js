import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Topnav from "./Topnav";
import Slidebar from "./Slidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

function MuiDashboard({children}) {
  const classes = useStyles();
  let [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Topnav
        open={isMobileOpen}
        handleDrawerToggle={() => setIsMobileOpen(true)}
      />
      <Slidebar
        isMobileOpen={isMobileOpen}
        handleDrawerToggle={() => setIsMobileOpen(false)}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default MuiDashboard;
