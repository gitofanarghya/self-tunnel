import { routingConstants } from '../_constants';

const initialState = {
    accessToken: "b'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjMyNTgzMDEsImVtYWlsIjoidmlzaG51QGFzdHJhbHByZXNlbmNlLmluIn0.2P-uo-rcgO1prkPrvnbromZW11DCgtcwRPJhGOi47fQ'",
    email: "vishnu@gmail.com"
}

export function auth(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case routingConstants.NONE:
      return {
        ...state,
        spaceOccupier: action.occupier,
        selectedDevice: action.selectedDevice
      };
  
    default:
      return state
  }
}

