import React from 'react';
import { connect } from 'react-redux';
import DeviceDetails from './DeviceDetails';
import DeviceList from './DeviceList';

class SpaceOccupier extends React.Component{
    render() {
        if(this.props.spaceOccupier === 'deviceList'){
            return(
                <DeviceList />
            );
        }
        else if(this.props.spaceOccupier === 'deviceDetails'){
            return(
                <DeviceDetails />
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { spaceOccupier  } = state.routing
    return {
      spaceOccupier,
    };
  }

export default connect(mapStateToProps, null)(SpaceOccupier);