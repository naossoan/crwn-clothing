import React from 'react'
import { SHOP_INVENTORY } from './shop-inventory'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super()

    this.state = {
      collections: SHOP_INVENTORY
    }
  }

  render() {
    const { collections } = this.state
    return(
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    )
  }

}

export default ShopPage