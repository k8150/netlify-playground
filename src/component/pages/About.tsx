import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

// TODO:
const styles = {
  container: {
    display: 'flex',
    margin: 'auto',
    paddingTop: '24px',
    width: '90%',
    maxWidth: '1024px'
  }
}

type ClassProps = {
  classes: {
    [key: string]: string
  }
}

type Props = ClassProps

// TODO:
const component: React.SFC<Props> = (props: Props) => {
  const { classes } = props
  return (
    <div>
      <Header />
      <main className={classes.container}>
        <h1>About</h1>
        <p>coming soon...</p>
      </main>
      <Footer />
    </div>
  )
}

export default withStyles(styles)(component)
