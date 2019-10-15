import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    return <tr key={name}></tr>;
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr></tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);
