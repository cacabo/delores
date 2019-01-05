/* global google, document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHospitals } from '../../actions/hospitalActions';
import { BLUE } from '../../constants/colors';

const MILES_TO_METERS = 1609.34;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      marker: null,
    };

    this.initMap = this.initMap.bind(this);
    this.waitForGoogle = this.waitForGoogle.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.setMarker = this.setMarker.bind(this);
    this.locationChanged = this.locationChanged.bind(this);
    this.radiusChanged = this.radiusChanged.bind(this);
    this.drawRadius = this.drawRadius.bind(this);
    this.renderHospitals = this.renderHospitals.bind(this);
    this.loadHospitals = this.loadHospitals.bind(this);
  }

  componentDidMount() {
    this.waitForGoogle();
  }

  componentDidUpdate(prevProps) {
    const { map } = this.state;
    if (!map) return;

    const { location } = this.props;

    if (this.locationChanged(prevProps)) {
      this.setMarker();
      map.panTo(location);
    } else if (this.radiusChanged(prevProps)) {
      this.drawRadius();
    }

    const { hospitalsState } = this.props;
    if (!hospitalsState || !hospitalsState.hospitals) return;
    if (!prevProps.hospitalsState || !prevProps.hospitalsState.hospitals) {
      this.renderHospitals();
    }
  }

  setMarker() {
    const { marker } = this.state;
    const existingMarker = marker;

    // Remove an existing marker if there is one
    if (existingMarker) {
      existingMarker.setMap(null);
    }

    const { location } = this.props;
    const newMarker = this.createMarker({ location });

    this.drawRadius();

    this.setState({
      marker: newMarker,
    });
  }

  createMarker({ location, icon }) {
    const { map } = this.state;

    return new google.maps.Marker({
      position: location,
      icon,
      map,
    });
  }

  drawRadius() {
    const { radiusCircle } = this.state;
    const existingRadiusCircle = radiusCircle;

    if (existingRadiusCircle) {
      existingRadiusCircle.setMap(null);
    }

    const { radiusType, location, radius } = this.props;
    const { map } = this.state;

    if (radiusType === 'Local' && map) {
      const newRadiusCircle = new google.maps.Circle({
        strokeColor: BLUE,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: BLUE,
        fillOpacity: 0.1,
        map,
        center: location,
        radius: radius * MILES_TO_METERS,
      });

      this.setState({ radiusCircle: newRadiusCircle });
    } else {
      this.setState({ radiusCircle: null });
    }
  }

  radiusChanged(prevProps) {
    if (!prevProps) return false;

    const { radiusType, radius } = this.props;

    if (prevProps.radiusType !== radiusType) return true;
    if (prevProps.radius !== radius) return true;

    return false;
  }

  /**
   * Busy wait for 'google' to be imported from the google maps script
   */
  waitForGoogle() {
    if (typeof google !== 'undefined') {
      this.initMap();
    } else {
      // Check again if google is defined
      setTimeout(this.waitForGoogle, 125);
    }
  }

  locationChanged(prevProps) {
    const { location } = this.props;

    if (!prevProps || !location || !prevProps.location) return false;

    const { lat, lng } = location;
    if (prevProps.location.lat !== lat) return true;
    if (prevProps.location.lng !== lng) return true;

    return false;
  }

  initMap() {
    const { location } = this.props;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 8,
    });

    const geocoder = new google.maps.Geocoder();

    this.setState({
      map,
      geocoder,
    }, () => {
      this.setMarker();
      this.loadHospitals();
    });
  }

  loadHospitals() {
    const { getHospitalsDispatch } = this.props;
    getHospitalsDispatch();
  }

  renderHospitals() {
    const hospitalMarkers = {};
    const { geocoder } = this.state;
    const { hospitalsState } = this.props;
    const { hospitals } = hospitalsState;

    hospitals.forEach((hospital) => {
      const { address, code } = hospital;
      const icon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      };

      const { createMarker } = this;

      const awaitMarker = new Promise((resolve, reject) => {
        if (hospital.location) { /* If the hospital already has a location */
          resolve(createMarker({
            location: hospital.location,
            icon,
          }));
        } else { /* If there is no location */
          geocoder.geocode({ address }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              const { location } = results[0].geometry;

              console.log(code, location.lat(), location.lng()); // eslint-disable-line

              resolve(createMarker({
                location,
                icon,
              }));
            }

            reject();
          });
        }
      });

      awaitMarker.then((marker) => {
        hospitalMarkers[code] = marker;

        (function(marker) { // eslint-disable-line
          google.maps.event.addListener(marker, 'click', function() { // eslint-disable-line
            console.log(code); // eslint-disable-line
          });
        })(hospitalMarkers[code]);
      });
    });

    this.setState({ hospitalMarkers }); // eslint-disable-line
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

function mapStateToProps({ locationState, mapState, hospitalsState }) {
  return {
    location: locationState,
    radius: mapState.radius,
    radiusType: mapState.radiusType,
    hospitalsState,
  };
}

const mapDispatchToProps = dispatch => ({
  getHospitalsDispatch: () => dispatch(getHospitals()),
});

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    name: PropTypes.string,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  radiusType: PropTypes.string.isRequired,
  getHospitalsDispatch: PropTypes.func.isRequired,
  hospitalsState: PropTypes.object.isRequired, // eslint-disable-line
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
