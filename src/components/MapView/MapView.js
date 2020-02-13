import React from "react";

import "./MapView.css";
import SearchBox from "../SearchBox/SearchBox";
import UseMyLocation from "../UseMyLocation/UseMyLocation";

import MapUI from "../MapUI/MapUI"

export default class MapView extends React.Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e1,e2,e3){
    //console.log('map',e1,e2,e3)
    this.props.getValue(e1,e2,e3);
  }

  render() {
    return (
      <div id="map-view" className="MapView">
        <div className="MapUI">
          <MapUI />
        </div>
        <div className="SearchBoxContainer">
          <SearchBox onSubmit={this.onSubmit}/>
        </div>
        <div className="UseMyLocationContainer">
          <UseMyLocation />
        </div>
      </div>

    );
  }

}
