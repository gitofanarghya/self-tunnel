import { routingConstants } from '../_constants';

const initialState = {
  spaceOccupier: 'deviceList',
  selectedDevice: null,
}

export function routing(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case routingConstants.SET_SPACE_OCCUPIER:
      return {
        ...state,
        spaceOccupier: action.occupier,
        selectedDevice: action.selectedDevice
      };
  
    default:
      return state
  }
}

