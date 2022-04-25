import React from 'react'

function Story({img,username}) {
  return (
    <div>
        <img src="https://cdn.fakercloud.com/avatars/victorerixon_128.jpg" alt=""/>
        <p>{username}</p>
    </div>
  )
}

export default Story