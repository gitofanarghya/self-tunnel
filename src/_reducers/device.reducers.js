import { deviceConstants } from '../_constants';

const initialState = {
    receivedDevices: false,
    devices: []
}

export function device(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case deviceConstants.GET_DEVICES_REQUEST:
      return {
    };
    
    case deviceConstants.GET_DEVICES_SUCCESS:
        return {
            devices: action.devices,
            receivedDevices: true,
    };

    case deviceConstants.GET_DEVICES_REQUEST:
        return {
    };
  
    default:
      return state
  }
}

