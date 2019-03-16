import * as React from 'react'
import { Link } from 'react-router-dom'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as moment from 'moment'
import IconLabel from '../molecules/IconLabel'

// TODO:
const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 151
    },
    controls: {
      display: 'flex',
      alignItems: 'left'
    }
  })

type Props = {
  classes: {
    [key: string]: string
  }
  entry: {
    id?: string
    title: string
    title_image_url: string
    content: string
    created_at: {
      _seconds: number
      _nanoseconds: number
    }
    updated_at: {
      _seconds: number
      _nanoseconds: number
    }
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
  const createdAt = moment.unix(entry.created_at._seconds)
  const url = `/entry/${entry.id}`

  return (
    <Card className={classes.card}>
      <div className={classes.controls}>
        <CardMedia
          className={classes.cover}
          image={entry.title_image_url}
          title=""
        />
      </div>
      <CardActionArea
        component={({ innerRef, ...props }) => <Link {...props} to={url} />}
      >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <IconLabel
              iconType="access_time"
              label={createdAt.format('YYYY/MM/DD HH:mm:ss')}
            />
            <Typography variant="headline" component="h2">
              {entry.title}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(component)
