import * as React from 'react';

import { Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import { Link } from 'react-router-dom';

class PositionMarker extends React.Component {
  render() {
    const { position, icon } = this.props;

    const iconPosition = Leaflet.icon({
      iconUrl: icon,
      iconSize: [20, 25],
      iconAnchor: [10, 25], // half width of icon size
      popupAnchor: [0, -30]
    });

    return (
      <Marker
        position={position.location.coordinates}
        icon={iconPosition}
        style={{ outline: 'none' }}
      >
        <Popup>
          <Link to={`/scooters/${position.license_plate}`}>
            {position.license_plate}
          </Link>{' '}
          ({position.energy_level}
          %)
          <br />
          {position._request_time}
        </Popup>
      </Marker>
    );
  }
}

export default PositionMarker;
