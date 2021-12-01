import React from 'react'

const post = {}

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

export default ({description, likes, url}) => {

    return(
        <div className="post">
            <h4>{description}</h4>
            <img className="post__image" src={formatImageUrl(url)}/>
            <div className="post__likes">
                <span>Likes: {likes}</span>
            </div>
        </div>
    )
}
