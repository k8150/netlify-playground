import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import SvgIcon from '@material-ui/core/SvgIcon'

// TODO:
const styles = {
  iconLabel: {
    fontSize: 'initial'
  },
  icon: {
    fontSize: 'initial',
    verticalAlign: 'middle'
  },
  label: {
    marginLeft: '4px',
    verticalAlign: 'middle'
  }
}

type Props = {
  classes: {
    [key: string]: string
  }
  iconType: string
  label: string
}

/**
 * IconLabel Component
 *
 * @param props
 */
const component: React.SFC<Props> = (props: Props) => {
  const { classes, iconType, label } = props
  return (
    <Typography
      className={classes.iconLabel}
      variant="subheading"
      color="textSecondary"
    >
      <Icon className={classes.icon}>{iconType}</Icon>
      <span className={classes.label}>{label}</span>
    </Typography>
  )
}

export default withStyles(styles)(component)
