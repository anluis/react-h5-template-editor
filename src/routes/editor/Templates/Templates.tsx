import * as React from 'react'
import templates from '../../../apis/templates/templates'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'

interface OwnProps {
  accessToken: string
}

type Props = OwnProps

class Templates extends React.Component<Props> {
  componentDidMount() {
    const { accessToken } = this.props
    const args = {
      Authorization: 'Bearer ' + accessToken,
      page: 1,
      perPage: 10
    }
    templates(args).then(r => {
      console.dir(r)
    })
  }
  render() {
    return null
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { accessToken } = state.auth
  return {
    accessToken
  }
}



export default connect(mapStateToProps)(Templates)