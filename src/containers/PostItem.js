import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TableCell, TableRow } from 'material-ui/Table'
import Button from 'material-ui/Button'

import * as actions from '../actions'

class PostItem extends Component {
  handleClick () {
    this.props.deletePost(this.props.id)
  }

  render () {
    return (
      <TableRow>
        <TableCell>{this.props.post} </TableCell>
        <TableCell>
          <Button raised onClick={this.handleClick.bind(this)}
                  color="accent">Delete</Button>
        </TableCell>
      </TableRow>
    )
  }
}

export default connect(null, actions)(PostItem)