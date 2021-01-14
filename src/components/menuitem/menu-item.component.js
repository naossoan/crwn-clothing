import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
                                                // this match.url linkUrl setup will just append the linkUrl to whatever the parent URL is.
                                                // So if we change the base URL for some reason, it will all still work
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage:`url(${imageUrl})`
        }}
      />
        <div className='content'>
          <h1 className='title'>{ title.toUpperCase() }</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )

export default withRouter(MenuItem)
// withRouter is an HOC - Higher Order Component. 
// It is a function that takes a component and returns a new component.
