import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { lifecycle, ReactLifeCycleFunctions } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { RootState, actionCreator, RootActions } from '../../modules'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import EntryCard from '../organisms/EntryCard'

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

type StateProps = {
  error?: string
  entries: [
    {
      id?: string
      title: string
      title_image_url: string
      content: string
      created_at: {
        _second: number
        _nanoseconds: number
      }
      updated_at: {
        _second: number
        _nanoseconds: number
      }
    }
  ]
  onLoad: () => void
}

type DispatchProps = {
  onLoad: () => void
}

type Props = ClassProps & StateProps & DispatchProps

const component: React.SFC<Props> = (props: Props) => {
  const { entries, classes } = props
  return (
    <div>
      <Header />
      <main className={classes.container}>
        {props.error === null ? (
          <Grid container spacing={8}>
            {entries.map((entry, index) => (
              <Grid item key={index} xs={12}>
                <EntryCard key={index} entry={entry} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <span>{props.error}</span>
        )}
      </main>
      <Footer />
    </div>
  )
}

const lifeCycleFunctions: ReactLifeCycleFunctions<Props, {}> = {
  componentWillMount() {},
  componentDidMount() {
    console.log(this.props)
    this.props.onLoad()
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  error: state.getAllEntries.error,
  entries: state.getAllEntries.entries,
  onLoad: state.getAllEntries.onLoad
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>
): DispatchProps => ({
  onLoad: () => {
    dispatch(actionCreator.api.getAllEntries())
  }
})

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(lifeCycleFunctions)(withStyles(styles)(component)))
