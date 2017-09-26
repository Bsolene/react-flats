import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.coordinates}
        defaultZoom={12}
        center={this.props.coordinates}
      >
        <Marker
          lat={this.props.coordinates.lat}
          lng={this.props.coordinates.lng}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;

