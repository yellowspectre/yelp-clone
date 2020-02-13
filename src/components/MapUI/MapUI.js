import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './MapUI.css'

export default class MapUI extends React.Component {

  constructor(props){
    super(props);
  }


  render() {

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        center = { this.props.latLng }
        zoom = { 13 }
      >
       {props.isMarkerShown && <Marker position={this.props.latLng} />}
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          isMarkerShown
          markerPosition={this.props.latLng}
          containerElement={ <div className="containerElement"/> }
          mapElement={ <div className="mapElement"/> }
        />
      </div>
   );   }
}
