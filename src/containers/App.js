import React from 'react'
import PostList from './PostList'
import Grid from 'material-ui/Grid'

class App extends React.Component {
  render () {
    return (
        <Grid align="center" container spacing={24}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <h4>Create a Post</h4>
            </Grid>
          </Grid>
          <PostList/>
        </Grid>
    )
  }
}

export default App