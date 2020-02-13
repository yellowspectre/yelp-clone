import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import "./SearchBox.css";


export default class SearchBox extends React.Component{

    constructor(props) {
      super(props);
      this.state = { address: '',
                     lat: '',
                     long: ''};
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
      //console.log(this.state.lat,this.state.long)
      this.props.onSubmit(this.state.address,this.state.lat,this.state.long);
    }

    handleChange = address => {
      this.setState({ address:address });
    };

    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {console.log('Success', latLng)
      this.setState({lat:latLng.lat.toString(),
                      long:latLng.lng.toString()})})
        .catch(error => console.error('Error', error));
    };

    render() {
      return (
        <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
          <button onClick={this.onSubmit}> clickme </button>
        </div>
      );
    }
}
