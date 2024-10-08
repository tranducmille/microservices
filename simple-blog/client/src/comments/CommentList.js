import React from 'react'

export default ({comments}) => {
  const renderComments = comments.map((comment) => {
    return (
       <li key={comment.id}>{comment.content}</li> )
  })
  return (
    <div>
        <ul>{renderComments}</ul>
    </div>
  )
}
