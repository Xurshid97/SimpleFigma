import React from 'react'
import {useNavigate} from 'react-router-dom'

function PageNotFound() {
  let goBack = useNavigate()
  return (
    <div>
        <h3>PageNotFound, Please go back home</h3>
        <br />
        <hr />
        <br />
        <button onClick={()=>goBack('/')}>Go back</button>
    </div>

  )
}

export default PageNotFound