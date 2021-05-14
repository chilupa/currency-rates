import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const Header = () => (
  <Grid container>
    <Grid item xs={6}>
      <Box pt={3} pb={3}>
        <Typography variant="h4" component="h1">
          Exchange Rates
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

export default Header;
