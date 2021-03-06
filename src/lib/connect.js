import { connect } from 'react-redux'
import resolve from './resolveStoreProps'

const mapStateToProps = storeProps => (storeState, ownProps) =>
  resolve(storeProps, storeState, ownProps)

const defaults = {
  pure: true,
  withRef: false,
}

export default (storeProps, options) => {
  const connector = connect(
    storeProps ? mapStateToProps(storeProps) : null,
    null,
    null,
    { ...defaults, ...options }
  )
  return (Component) => {
    Component.storeProps = storeProps
    return connector(Component)
  }
}
