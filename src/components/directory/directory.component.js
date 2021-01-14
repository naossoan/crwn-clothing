import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menuitem/menu-item.component'
import { sections } from './directory.data'

class Directory extends React.Component {
  constructor () {
    super()

    this.state = {
      sections: []
    }

  }

  //when it mounts the component, grab the array of objects from the data file
  componentDidMount() {
     this.setState({sections: sections})    
  }

  render () {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          )) 
        }
      </div>
    )
  }
}

export default Directory
