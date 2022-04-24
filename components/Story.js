import React from 'react'

function Story({img,username}) {
  return (
    <div>
        <im src={img} alt=""/>
        <p>{username}</p>
    </div>
  )
}

export default Story