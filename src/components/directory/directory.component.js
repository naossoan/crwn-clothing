import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menuitem/menu-item.component'
import { sections } from './directory.data'

class Directory extends React.Component {
  constructor () {
    super()

    this.state = {
      sections: sections
    }

  }

  //when it mounts the component, grab the array of objects from the data file
  // componentDidMount() {
  //    this.setState({sections: sections})    
  // }

  render () {
    return (
      <div className='directory-menu'>
        {
          // ...otherSectionProps is short hand for passing through all the props, like 'title,' 'linkUrl,' 'imageUrl,' etc without having to type them all
          this.state.sections.map(({id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          )) 
        }
      </div>
    )
  }
}

export default Directory
