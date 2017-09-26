import React from 'react';
import Flat from './flat';

const FlatList = (props) => {

  const renderList = () => {
    return (props.flats.map((flat) => {
        return (
          <Flat
            key={flat.imageUrl}
            name={flat.name}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            url={flat.imageUrl}
            lng={flat.lng}
            lat={flat.lat}
            onFlatClick={props.onFlatClick}
          />
        )
      }))
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
}



export default FlatList;
