import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import Topnav from "./Topnav";
import Slidebar from "./Slidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {},
  appBarSpacer: {},
  container: {},
  papaer: {}
}));

function MuiDashboard() {
  const classes = useStyles();
  let [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Slidebar open={isOpen} closeSlidebar={() => setIsOpen(false)} />
      <Topnav open={isOpen} openSlidebar={() => setIsOpen(true)} />

      <main className={classes.content}>
        <div className={classes.appbarSpacer} />
        <Container className={classes.container} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xa={12} lg={9}>
              <p>Fist Content</p>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default MuiDashboard;
