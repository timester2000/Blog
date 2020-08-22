import React from 'react'

import { Link } from 'react-router-dom'

function Post({ post }) {
  return (
    <div className="card-deck ">
      <div className="row ">
        <div className="col-mx-3">
          <div className="card" style={{width: '18rem'}} >
            <img src={require('../../img/img.jpg')} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.summary}</p>
              <p className="card-text">{post.category.name}</p>
              <Link to={`/posts/${post.id}`} className="btn btn-primary">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post