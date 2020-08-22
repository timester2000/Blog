import React, { useState, useEffect } from 'react'
import  Post from './Post'
function Posts() {
  const [posts, setPosts] = useState([])

  const token ='4e8531f718610a0226c25cf66ef6d88af7eab11a'
  
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Token ${token}`
    }
  }

  useEffect(() => {
    fetch('/api/posts/', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  })

  if (posts.length === 0) return <h3>Loading...</h3>

  return (
    <div style={{margin:'28px', border:'3px blue'}}>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Posts</span>
        {' '}List
      </h1>
      { 
        posts.map(post => (
          <Post
            key={post.id} post={post}
          />
        ))
      }
    </div>
  )
}

export default Posts