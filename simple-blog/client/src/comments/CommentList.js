import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default ({postId}) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async() => {
    const rs = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(rs.data);
  }

  useEffect(() => {
    fetchComments();
  },[])
  
  const renderComments = Object.values(comments).map((comment) => {
    return (
       <li key={comment.id}>{comment.content}</li> )
  })
  return (
    <div>
        <ul>{renderComments}</ul>
    </div>
  )
}
