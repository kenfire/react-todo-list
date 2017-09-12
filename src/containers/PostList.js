import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import {fetchPosts, createPost, deletePost} from '../actions'
import PostItem from './PostItem'
import Grid from 'material-ui/Grid'
import AddPostForm from './AddPostForm'

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
      <div>
        <Grid item xs={12}>
          <Grid container justify="center">
            <AddPostForm
              handleFormSubmit={this.handleFormSubmit.bind(this)}
              handleInputChange={this.handleInputChange.bind(this)}
              post={this.state.post}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </Grid>
        </Grid>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {posts: state.posts}
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: fetchPosts,
    createPost: createPost,
    deletePost: deletePost
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)