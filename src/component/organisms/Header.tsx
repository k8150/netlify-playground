import * as React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

// TODO:
const styles = {
  appBar: {},
  title: {
    variant: 'title',
    flexGrow: 1,
    textDecoration: 'none'
  }
}

type Props = {
  classes: {
    appBar: string
    title: string
  }
}

/**
 * Header Component
 *
 * @param {*} props
 * @returns
 */
const component: React.SFC<Props> = (props: Props) => {
  const { classes } = props
  return (
    <CssBaseline>
      <AppBar className={classes.appBar} position="sticky" color="inherit">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="title"
            color="inherit"
            component={Link}
            to="/"
          >
            K/8150
          </Typography>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  )
}

export default withStyles(styles)(component)
