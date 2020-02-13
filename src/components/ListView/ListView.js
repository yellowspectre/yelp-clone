import React from "react";

import "./ListView.css";

export default class ListView extends React.Component {

  constructor(props){
    super(props)
    this.state = {value: ['']}
    this.getUrl = this.getUrl.bind(this);
}

  getUrl() {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${this.props.lat}&longitude=${this.props.lng}&categories=restaurants&radius=1600&limit=10`,{
      method: "GET",
      headers: new Headers({
        "Authorization": 'Bearer wfjGJjybjdhG0J0LVynQTGytYSx3wWFq86tLagik1Q4VuQNV_RsSMldrz3tdjk_0oC30nRp1ba3PsvsXg1s5c7fx3Wcz9_ZgUcczJpRBcbXd2qLv2_TUH6s64KKbXHYx',
        "X-Requested-With": 'http://localhost:3000'
    })
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ value: data })
      console.log(this.state.value)
    })
    .catch(console.log)


  }

  componentDidUpdate(prevProps) {
    if (prevProps.place !== this.props.place) {
      this.getUrl();
    }
  }

  renderTableData() {
      // if(this.props.place !== undefined && this.state.value.businesses == undefined){
      //   this.getUrl();
      // }
      //console.log('hi',this.state.value.businesses)
      if(this.state.value.businesses !== undefined){
        const listItems = this.state.value.businesses.map((d) => <dl className="data" key={d.id}>{d.name}</dl>);

        return (
          <div className="dataList">
            {listItems}
          </div>
        );
      }
   }

  render()
  {  //  console.log('list',this.props.place,this.props.lat,this.props.lng);
  // console.log(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${this.props.lat}&longitude=${this.props.lng}&categories=restaurants&radius=1600&limit=10`);
      return (
      <div id="list-view" className="ListView">
            {this.renderTableData()}
      </div>
    );
  }
}
