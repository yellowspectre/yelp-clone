import React from "react";

import ListView from "../components/ListView/ListView";
import MapView from "../components/MapView/MapView";
import "./App.css";

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {value: '',
                  lat: '',
                  lng:''};
    this.getValue = this.getValue.bind(this);
  }

  getValue(e1,e2,e3){

      //console.log('app',e1,e2,e3)
    
      this.setState({
        lat: e2,
        value: e1,
        lng: e3
      });
  }

  render()
  {
    return (
      <div className="App">
        <ListView place={this.state.value} lat={this.state.lat} lng={this.state.lng}/>
        <MapView getValue={this.getValue}/>

      </div>
    );
  }
}
