import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
    id: number
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
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.entryCardActionArea}>
        <CardMedia
          className={classes.media}
          image={entry.title_image_url}
          title=""
        />
        <CardContent>
          <Typography variant="subheading" color="textSecondary">
            {entry.created_at}
          </Typography>
          <Typography variant="headline" component="h2">
            {entry.title}
          </Typography>
          <Typography component="p">{entry.content}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(component)
