import React, { Component } from 'react';
import FlatList from './flat_list';
import SimpleMap from './map';
import flats from '../data/flats';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: flats[0].lat,
      lng: flats[0].lng,
      // selectedFlat: { flats[0] }
    };
  }

  clickFlat = (coordinates) => {
    this.setState({
      lat: coordinates.lat,
      lng: coordinates.lng
    });
  }

  render () {
    return (
      <div>
        <FlatList flats={flats} onFlatClick={this.clickFlat} />
        <div className="map-container">
          <SimpleMap coordinates={{lat: this.state.lat, lng: this.state.lng}} />
        </div>
      </div>
    );
  }
}




export default App;
