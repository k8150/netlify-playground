import * as React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import IconLabel from '../molecules/IconLabel'

// TODO:
const styles = {
  card: {
    maxWidth: '100%'
  },
  entryCardActionArea: {
    width: '100%'
  },
  media: {
    minHeight: 140
  }
}

type Props = {
  classes: {
    [key: string]: string
  }
  entry: {
    id?: number
    title: string
    title_image_url: string
    content: string
    created_at: Date
    updated_at: Date
  }
}

/**
 * EntryCard Component
 *
 * @param {*} props
 * @returns
 */
const component: React.SFC<Props> = (props: Props) => {
  const { classes, entry } = props
  // const createdAt = entry.created_at.toISOString()
  const url = `/entry/${entry.id}`

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.entryCardActionArea}
        component={({ innerRef, ...props }) => <Link {...props} to={url} />}
      >
        <CardMedia
          className={classes.media}
          image={entry.title_image_url}
          title=""
        />
        <CardContent>
          <IconLabel iconType="access_time" label={'9999-12-31 00:00:00'} />
          <Typography variant="headline" component="h2">
            {entry.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(component)
