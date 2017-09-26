import React from 'react';


const Flat = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.onFlatClick({lat: props.lat, lng: props.lng})
  };

  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.url})` }}>
      <div className="card-category">{props.price} {props.priceCurrency}</div>
      <div className="card-description">
        <h2>{props.name}</h2>
      </div>
      <a
        className="card-link"
        href="#"
        onClick={handleClick}
      />
    </div>
  )
}

export default Flat;
