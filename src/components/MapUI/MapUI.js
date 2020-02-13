import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import './MapUI.css'

export default class MapUI extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div className="containerElement"/> }
          mapElement={ <div className="mapElement"/> }
        />
      </div>
   );   }
}
