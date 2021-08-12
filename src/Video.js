import React from 'react'

const Video = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.dateAdded}</h3>
            <h3>{props.chanel}</h3>
        </div>
    )
}

export default Video