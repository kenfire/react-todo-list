import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

 const  AddPostForm = ({handleFormSubmit, handleInputChange, post}) => (
    <form onSubmit={handleFormSubmit} className="form-inline">
      <div className="form-group">
        <TextField
          placeholder="Add a post"
          value={post}
          onChange={handleInputChange}/>
        <Button raised color="primary" type="submit">
          Create Post
        </Button>
      </div>
    </form>
   )

export default AddPostForm