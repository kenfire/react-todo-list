import React  from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostItem from './PostItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

class PostList extends React.Component {
  state = {post: ''}

  componentWillMount () {
    this.props.fetchPosts()
  }

  handleInputChange (event) {
    this.setState({post: event.target.value})
  }

  handleFormSubmit (event) {
    event.preventDefault()

    this.props.createPost(this.state.post)
  }

  renderPosts () {
    return _.map(this.props.posts, (post, key) => {
      return <PostItem key={key} post={post} id={key}/>
    })
  }

  render () {
    return (
      <Grid align="center" container spacing={24}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <h4>Create a Post</h4>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
              <div className="form-group">
                <TextField
                  placeholder="Add a post"
                  value={this.state.post}
                  onChange={this.handleInputChange.bind(this)}/>
                <Button raised color="primary" type="submit">
                  Create Post
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, actions)(PostList)