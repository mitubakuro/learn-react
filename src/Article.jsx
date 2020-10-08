import React from 'react'
import LikeButton from './LikeButton'

const Article=(props)=>{
  return(
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開設定：</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={()=> props.toggle()} />
      <LikeButton count={props.count} />
    </div>
  )
}

export default Article