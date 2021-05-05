import React from "react";
import clsx from "clsx";
import Page from "~/components/Page";
import Layout from "~/layouts/DashboardLayout";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";

import Chart from "./Chart";
import RecentDeposits from "./RecentDeposits";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeighPaper: {
    width: 240
  }
}));

export default function Index() {
  const classes = useStyles();
  const fixedHeighPaper = clsx(classes.paper, classes.fixedHeighPaper);
  return (
    <Page title="MUI Dashboard">
      <Layout>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeighPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeighPaper}>
                <RecentDeposits />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </Page>
  );
}
