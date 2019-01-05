import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { lifecycle, ReactLifeCycleFunctions } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { RootState, actionCreator, RootActions } from '../../modules'
import Header from '../organisms/Header'
import EntryCard from '../organisms/EntryCard'

// TODO:
const styles = {
  container: {
    display: 'flex',
    margin: '24px auto 0 auto',
    width: '1020px'
  }
}

type ClassProps = {
  classes: {
    [key: string]: string
  }
}

type StateProps = {
  error?: string
  data: [
    {
      id: number
      title: string
      title_image_url: string
      content: string
      created_at: Date
      updated_at: Date
    }
  ]
  onLoad: () => void
}

type DispatchProps = {
  onLoad: () => void
}

type Props = ClassProps & StateProps & DispatchProps

const component: React.SFC<Props> = (props: Props) => {
  const { data, classes } = props
  return (
    <div>
      <Header />
      <main className={classes.container}>
        {props.error === null ? (
          <Grid container spacing={24}>
            {data.map((entry, index) => (
              <Grid item xs={12}>
                <EntryCard key={index} entry={entry} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <span>{props.error}</span>
        )}
      </main>
    </div>
  )
}

const lifeCycleFunctions: ReactLifeCycleFunctions<Props, {}> = {
  componentWillMount() {},
  componentDidMount() {
    this.props.onLoad()
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  error: state.api.error,
  data: state.api.data,
  onLoad: state.api.onLoad
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>
): DispatchProps => ({
  onLoad: () => {
    dispatch(actionCreator.api.getData())
  }
})

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(lifeCycleFunctions)(withStyles(styles)(component)))
