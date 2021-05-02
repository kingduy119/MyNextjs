import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topnav from './Topnav';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }
}));

function MuiDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <CssBaseline />
      <Topnav />
    </div>
  )
}

export default MuiDashboard;