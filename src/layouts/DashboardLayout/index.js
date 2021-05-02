import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topnav from './Topnav';
import Slidebar from './Slidebar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }
}));

function MuiDashboard() {
  const classes = useStyles();
  let [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <Topnav openSlidebar={() => setIsOpen(true)} />
      <Slidebar
        open={isOpen}
        closeSlidebar={() => setIsOpen(false)}
      />
    </div>
  )
}

export default MuiDashboard;