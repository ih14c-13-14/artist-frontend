import type { Meta } from '@storybook/react';

import Grid from './Grid.component';

const GridStory: Meta<typeof Grid> = {
  component: Grid,
  args: {},
};

export default GridStory;

export const Nested = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
      </Grid>
    </Grid>
  </Grid>
);
