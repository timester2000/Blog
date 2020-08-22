import React, { useState } from 'react'

const Details = (props) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    const { id } = props.match.params

    console.log('id', id)

    const token = '4e8531f718610a0226c25cf66ef6d88af7eab11a'
    
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    }

    fetch(`/api/posts/${id}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data) 
      })
  }, [])

  if (Object.keys(post).length === 0) return <h3>Loading...</h3>

  return (
    <div>
        <div className="container-fluid ">
        <h4 className="paragraf" style={{color:'red'}}>{post.sumary}</h4>
        <p>{post.description}</p>
        <img src={require('../../img/img1.jpg')} alt="image"/>
      </div>
    </div>
  )
}

export default Details



