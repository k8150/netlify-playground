import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { lifecycle, ReactLifeCycleFunctions } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { RootState, actionCreator, RootActions } from '../../modules'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
// import remark from 'remark'
// import remark2react from 'remark-react'
const remark = require('remark')
const remark2react = require('remark-react')

// TODO:
const styles = {
  container: {
    display: 'flex',
    margin: '24px auto 0 auto',
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
  error?: string | null
  [key: string]: any
  entry: {
    id?: number
    title: string
    title_image_url: string
    content: string
    created_at: Date
    updated_at: Date
  }
  onLoad: (entryId: number) => void
}

type DispatchProps = {
  onLoad: (entryId: number) => void
}

type Props = ClassProps & StateProps & DispatchProps

const component: React.SFC<Props> = (props: Props) => {
  const { entry, classes } = props
  return (
    <div>
      <Header />
      <main className={classes.container}>
        <div>
          {
            remark()
              .use(remark2react)
              .processSync(entry.content).contents
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}

const lifeCycleFunctions: ReactLifeCycleFunctions<Props, {}> = {
  componentWillMount() {},
  componentDidMount() {
    console.log(this.props)
    const entryId = this.props.match.params.entryId
    this.props.onLoad(entryId)
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  error: state.getEntry.error,
  entry: state.getEntry.entry,
  onLoad: state.getEntry.onLoad
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>
): DispatchProps => ({
  onLoad: (entryId: number) => {
    dispatch(actionCreator.api.getEntry(entryId))
  }
})

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(lifeCycleFunctions)(withStyles(styles)(component)))
