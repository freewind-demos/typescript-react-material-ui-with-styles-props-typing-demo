import React from 'react'
import {createStyles} from "@material-ui/styles";
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme) => (
  createStyles({
    red: {
      color: 'red'
    }
  })
);

export type HelloProps = {
  name: string,
}

function Hello({classes, name}: WithStyles<typeof styles> & HelloProps) {
  return <div>
    <h1 className={classes.red}>Hello {name}</h1>
  </div>
}

export default withStyles(styles)(Hello);
