import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import style from './Container.module.css';

interface ComponentProp {
  id: string;
  title: string;
  subTitle: string;
  children: JSX.Element | JSX.Element[];
}

const Container = ({ id, title, subTitle, children }: ComponentProp): JSX.Element => (
  <Grid container className={style.root} spacing={0} id={id}>
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h2" component="h3">
            <Box fontWeight="fontWeightBold" textAlign="center">
              {title}
            </Box>
          </Typography>
          <Typography variant="subtitle1" component="span">
            <Box textAlign="center" fontStyle="italic">
              {subTitle}
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Grid>

    {children}
  </Grid>
);

export default Container;
