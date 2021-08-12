import React from 'react'
import ReactDOM from 'react-dom'
import Video from './Video'

const App = () => {
    return (
        <div>
            <h2>WeTube</h2>
            <Video title="The Best Vidio" dateAdded="2 days ago" channel="News Channel" />
            <Video title="The Cool Vidio" dateAdded="2 days ago" channel="Cool Channel" />
            <Video title="The Learning Vidio" dateAdded="2 days ago" channel="Learning Channel" />
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
