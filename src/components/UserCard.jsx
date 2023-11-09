import React, {useState} from 'react'

function UserCard() {
    let [like, setLike] = useState(0)
    let [dislike, setDisLike] = useState(0)
  
  let likeClick = () => {
    setLike(like + 1)
  }
  let disLike = () => {
    setDisLike(dislike + 1)
  }
  return (
    <div className='userCard'>
        <div className='userImg'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG" alt="" />
        </div>
        <div className='userDetails'>
            <h3>Nicola Tesla</h3>
            <p>electrical engineer</p>

            <div className='buttons'>
                <button onClick={disLike}>Dislike</button>
                <button onClick={likeClick}>Like</button>
            </div>
            <p className='likes'>{like} likes</p>
            <p className='dislike'>{dislike} dislikes</p>
        </div>
    </div>
  )
}

export default UserCard