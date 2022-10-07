import React from 'react'
import './MangaCard.css'
import { Tag } from 'antd'

function MangaCard(props) {
  return (
    <div className="card bordered">
        <div className="img-slot">
            <img alt='img' className='manga-img' src={props.image}/>
        </div>
        <div className="manga-name">
            {props.name}
        </div>
        <div className="manga-tags">
            {props.tags.map((tag, index) => {
              return (
                <Tag key={index} color='red'>{tag}</Tag>
              )
            })}
        </div>
    </div>
  )
}

export default MangaCard